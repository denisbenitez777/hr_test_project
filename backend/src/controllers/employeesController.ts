import { Request, Response } from 'express';
import { EmployeeRepo } from '../repositories/inMemory';

export const create = (req: Request, res: Response) => {
  const data = req.body;
  const created = EmployeeRepo.create(data);
  res.status(201).json(created);
};

export const list = (_req: Request, res: Response) => {
  res.json(EmployeeRepo.findAll());
};
