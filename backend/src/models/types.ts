export type ID = string;

export interface Employee {
  id: ID;
  nombre: string;
  apellido: string;
  cedula?: string;
  email?: string;
  cargo?: string;
  sectorId?: ID | null;
  fechaIngreso?: string;
}

export interface Sector { id: ID; nombre: string; descripcion?: string; }
export interface Attendance { id: ID; employeeId: ID; tipo: 'entrada'|'salida'; timestamp: string; }
export interface Document { id: ID; employeeId: ID; nombreArchivo: string; url: string; tipo?: string; uploadedAt: string; }
export interface Vacation { id: ID; employeeId: ID; fechaInicio: string; fechaFin: string; dias: number; aprobado: boolean; creadoEn: string; }
export interface Training { id: ID; titulo: string; descripcion?: string; fecha: string; participantes: ID[]; creadoEn: string; }
export interface Goal { id: ID; employeeId?: ID; sectorId?: ID; titulo: string; descripcion?: string; estado: 'pendiente'|'en_progreso'|'completada'; fechaCreacion: string; fechaVencimiento?: string; }
