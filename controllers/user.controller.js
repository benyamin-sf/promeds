import { StatusCodes as SC } from 'http-status-codes';

import { PrismaClient, Prisma } from '../generated/prisma/client.js';
import { simpleHash } from '../utils/password.js';

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  const hashedPassword = await simpleHash(req.body.password);

  delete req.body.user;

  const newUser = await prisma.user.create({
    data: {
      ...req.body,
      password: hashedPassword,
    },
  });

  res.status(201).send({ status: 'success', message: newUser });
};

const getUsers = async (req, res) => {
  let users = [];
  let usersCount = 0;
  let menCount = 0;
  let womenCount = 0;

  const currentPage = Math.abs(parseInt(req?.query?.page)) || 1;
  const itemsPerPage = 10;

  [users, usersCount, menCount, womenCount] = await prisma.$transaction([
    prisma.user.findMany({
      orderBy: { lastName: 'asc' },
      omit: { password: true },
      where: { NOT: { role: { equals: 'admin' } } },
      take: itemsPerPage,
      skip: (currentPage - 1) * itemsPerPage,
    }),
    prisma.user.count(),
    prisma.user.count({ where: { gender: 'man' } }),
    prisma.user.count({ where: { gender: 'woman' } }),
  ]);

  res.status(SC.OK).send({
    status: 'success',
    message: {
      users,
      count: usersCount,
      numberOfPages: Math.ceil(usersCount / itemsPerPage) || 1,
      currentPage,
      menCount,
      womenCount,
    },
  });
};

const getUser = async (req, res) => {
  res.status(SC.OK).send({ status: 'success', message: req.body?.resource });
};

const updateUser = async (req, res) => {
  const { params, body } = req;

  // DO NOT REMOVE THESE TWO STATEMENTS
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  // checking new email for duplicates
  if (user) throw new BadRequestError("'Email address' is already registered");

  delete req.body.user;
  delete req.body.resource;

  await prisma.user.update({
    where: { id: params.id, password: Prisma.skip },
    data: body,
  });

  res.status(SC.OK).send({
    status: 'success',
    message: 'User info was successfully updated!',
  });
};

const deleteUser = async (req, res) => {
  await prisma.user.delete({ where: { id: req.params.id } });
  res.sendStatus(SC.NO_CONTENT);
};

export default {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
