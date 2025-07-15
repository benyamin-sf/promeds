import { StatusCodes as SC } from 'http-status-codes';

import { PrismaClient } from '../generated/prisma/client.js';
import { getVisitTime } from '../utils/constants.js';

const prisma = new PrismaClient();

const createSpecialty = async (req, res) => {
  const newSpecialty = req.body.title;
  const newField = await prisma.specialty.create({
    data: {
      title: newSpecialty,
      avgVisitTime: getVisitTime(newSpecialty),
    },
  });

  res.status(SC.CREATED).send({ status: 'success', message: newField });
};

const getSpecialties = async (req, res) => {
  const specialties = await prisma.specialty.findMany();

  res.status(SC.OK).send({ status: 'success', message: specialties });
};

const getSpecialty = async (req, res) => {
  res.status(SC.OK).send({ status: 'success', message: req.body?.resource });
};

const updateSpecialty = async (req, res) => {
  await prisma.specialty.update({
    where: { id: req.params?.id },
    data: {
      title: req.body.title,
      avgVisitTime:
        parseInt(req.body.avgVisitTime) ?? getVisitTime(req.body.title),
    },
  });

  res.status(SC.OK).send({
    status: 'success',
    message: 'Specialty was updated successfully!',
  });
};

const deleteSpecialty = async (req, res) => {
  await prisma.specialty.delete({
    where: { id: req.params?.id },
  });

  res.sendStatus(SC.NO_CONTENT);
};

export default {
  createSpecialty,
  getSpecialties,
  getSpecialty,
  updateSpecialty,
  deleteSpecialty,
};
