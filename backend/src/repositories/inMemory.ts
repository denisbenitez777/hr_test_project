import { v4 as uuidv4 } from 'uuid';
import { Employee, Sector, Attendance, Document, Vacation, Training, Goal } from '../models/types';

const employees: Employee[] = [];
const sectors: Sector[] = [];
const attendance: Attendance[] = [];
const documents: Document[] = [];
const vacations: Vacation[] = [];
const trainings: Training[] = [];
const goals: Goal[] = [];

export const EmployeeRepo = {
  create: (data: Omit<Employee,'id'>) => { const e: Employee = { ...data, id: uuidv4() }; employees.push(e); return e; },
  findAll: () => employees,
  findById: (id: string) => employees.find(e=>e.id===id) || null
};

export const SectorRepo = {
  create: (data: Omit<Sector,'id'>) => { const s: Sector = { ...data, id: uuidv4() }; sectors.push(s); return s; },
  findAll: () => sectors
};

export const AttendanceRepo = {
  create: (data: Omit<Attendance,'id'|'timestamp'> & { timestamp?: string }) => { const a: Attendance = { id: uuidv4(), timestamp: data.timestamp ?? new Date().toISOString(), ...data }; attendance.push(a); return a; },
  findAll: () => attendance
};

export const DocumentRepo = {
  create: (data: Omit<Document,'id'|'uploadedAt'>) => { const d: Document = { id: uuidv4(), uploadedAt: new Date().toISOString(), ...data }; documents.push(d); return d; },
  findAll: () => documents
};

export const VacationRepo = {
  create: (data: Omit<Vacation,'id'|'creadoEn'|'aprobado'> & { aprobado?: boolean }) => { const v: Vacation = { id: uuidv4(), creadoEn: new Date().toISOString(), aprobado: data.aprobado ?? false, ...data }; vacations.push(v); return v; },
  findAll: () => vacations,
  approve: (id: string) => { const idx = vacations.findIndex(v=>v.id===id); if(idx===-1) return null; vacations[idx].aprobado=true; return vacations[idx]; }
};

export const TrainingRepo = {
  create: (data: Omit<Training,'id'|'creadoEn'|'participantes'> & { participantes?: string[] }) => { const t: Training = { id: uuidv4(), creadoEn: new Date().toISOString(), participantes: data.participantes ?? [], ...data }; trainings.push(t); return t; },
  findAll: () => trainings,
  addParticipant: (id: string, employeeId: string) => { const t = trainings.find(x=>x.id===id); if(!t) return null; if(!t.participantes.includes(employeeId)) t.participantes.push(employeeId); return t; }
};

export const GoalRepo = {
  create: (data: Omit<Goal,'id'|'fechaCreacion'|'estado'> & { estado?: Goal['estado'] }) => { const g: Goal = { id: uuidv4(), fechaCreacion: new Date().toISOString(), estado: data.estado ?? 'pendiente', ...data }; goals.push(g); return g; },
  findAll: () => goals,
  updateState: (id: string, estado: Goal['estado']) => { const idx = goals.findIndex(g=>g.id===id); if(idx===-1) return null; goals[idx].estado=estado; return goals[idx]; }
};
