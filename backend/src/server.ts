import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import employeesRouter from './routes/employees';
import sectorsRouter from './routes/sectors';
import attendanceRouter from './routes/attendance';
import documentsRouter from './routes/documents';
import vacationsRouter from './routes/vacations';
import trainingsRouter from './routes/trainings';
import goalsRouter from './routes/goals';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (_req, res) => res.send('API running - use /api/*'));

app.use('/api/employees', employeesRouter);
app.use('/api/sectors', sectorsRouter);
app.use('/api/attendance', attendanceRouter);
app.use('/api/documents', documentsRouter);
app.use('/api/vacations', vacationsRouter);
app.use('/api/trainings', trainingsRouter);
app.use('/api/goals', goalsRouter);

app.get('/routes', (_req, res) => {
  const routes: string[] = [];
  (app._router.stack || []).forEach((m: any) => {
    if (m.route && m.route.path) {
      const methods = Object.keys(m.route.methods).join(',').toUpperCase();
      routes.push(`${methods} ${m.route.path}`);
    }
  });
  res.json({ routes });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
