HR Test Project
====================

Estructura generada:
- backend/  (Node + TypeScript + Express)
- frontend/ (React + Vite + TypeScript)

Instrucciones (Windows):
1) Abrir terminal en backend:
   cd backend
   npm install
   npm run dev
   # API en http://localhost:3000
   # En caso de que retorne el erroe "nodemon : File ... cannot be loaded because running scripts is disabled", ejecutar el siguiente comando: 
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process


2) Abrir otra terminal en frontend:
   cd frontend
   npm install
   npm run dev
   # Frontend en http://localhost:5173
   # En caso de que retorne el erroe "nodemon : File ... cannot be loaded because running scripts is disabled", ejecutar el siguiente comando: 
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

Endpoints:
- GET  /api/employees
- POST /api/employees
- GET  /api/sectors
- GET  /api/attendance
- GET  /api/documents
- GET  /api/vacations
- GET  /api/trainings
- GET  /api/goals

====================
Explicación breve
Aplicación simple de gestión de recursos humanos (HR) que incluye un backend en Node.js con Express y un frontend en React. Permite gestionar empleados, sectores, asistencia, documentos, vacaciones, capacitaciones y metas.
El proyecto está dividido en dos partes principales:
- Backend (Node.js + Express)
- Frontend (React)
Ambos se comunican mediante solicitudes HTTP utilizando JSON.