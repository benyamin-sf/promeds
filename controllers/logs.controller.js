import { StatusCodes as SC } from 'http-status-codes';

import { PrismaClient } from '../generated/prisma/client.js';
import { UnauthorizedError } from '../utils/customErrors.js';

const prisma = new PrismaClient();

const getLog = async (req, res) => {
  const target = req.body.resource;

  if (target.ownerId !== req.body.user.id) {
    throw new UnauthorizedError(
      'شما اجازه دسترسی و تغییر در محتوای سایر کاربران را ندارید'
    );
  }

  const model =
    req.body.user.role === 'staff' ? prisma.staffLog : prisma.userLog;

  const log = await model.update({
    where: { id: target.id },
    data: { isRead: true },
  });

  res.status(SC.OK).send({
    status: 'success',
    message: log,
  });
};

const updateLog = async (req, res) => {
  const target = req.body.resource;

  if (target.ownerId !== req.body.user.id) {
    throw new UnauthorizedError(
      'شما اجازه تغییر در محتوای سایر کاربران را ندارید'
    );
  }

  const model =
    req.body.user.role === 'staff' ? prisma.staffLog : prisma.userLog;

  await model.update({ where: { id: target.id }, data: { isRead: true } });

  res.status(SC.OK).send({
    status: 'success',
    message: 'وضعیت پیام به خوانده شده تغییر پیدا کرد.',
  });
};

const deleteLog = async (req, res) => {
  const target = req.body.resource;

  if (target.ownerId !== req.body.user.id) {
    throw new UnauthorizedError(
      'شما اجازه تغییر در محتوای سایر کاربران را ندارید'
    );
  }

  const model =
    req.body.user.role === 'staff' ? prisma.staffLog : prisma.userLog;

  await model.delete({ where: { id: target.id } });

  res.sendStatus(SC.NO_CONTENT);
};

const getSelfUnreadLogsCount = async (req, res) => {
  const user = req.body.user;

  const sharedWhereClause = {
    where: {
      AND: [
        {
          ownerId: user.id,
        },
        {
          isRead: false,
        },
      ],
    },
  };

  const isStaff = user.role === 'staff';
  let numberOfLogs = 0;

  if (isStaff) {
    numberOfLogs = await prisma.staffLog.count(sharedWhereClause);
  }

  if (!isStaff) {
    numberOfLogs = await prisma.userLog.count(sharedWhereClause);
  }

  res.status(SC.OK).send({ status: 'success', message: numberOfLogs });
};

const getSelfLogs = async (req, res) => {
  const { user } = req.body;

  const sharedWhereClause = {
    orderBy: { generatedAt: 'desc' },
    where: { ownerId: user.id },
  };

  const isStaff = user.role === 'staff';
  let userLogs = [];

  if (isStaff) {
    userLogs = await prisma.staffLog.findMany(sharedWhereClause);
  }

  if (!isStaff) {
    userLogs = await prisma.userLog.findMany(sharedWhereClause);
  }

  res.status(SC.OK).send({ status: 'success', message: userLogs });
};

export default {
  getLog,
  updateLog,
  deleteLog,
  getSelfUnreadLogsCount,
  getSelfLogs,
};
