// Simple backend for migration logic (optional)
import express from 'express';
import migrationLogic from './migrationLogic.js';

const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/api/feature-flags', (req, res) => {
  res.json(migrationLogic.getFeatureFlags());
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
