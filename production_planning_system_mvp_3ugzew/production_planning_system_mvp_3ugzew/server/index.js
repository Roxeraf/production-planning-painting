import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import initSqlJs from 'sql.js';
import fs from 'fs';
import ProductionPlanner from './planningAlgorithm';

const app = express();
const server = createServer(app);
const io = new Server(server);
const planner = new ProductionPlanner();

// Add new endpoint for real-time updates
app.post('/api/production/update', express.json(), (req, res) => {
  const { orders, machines } = req.body;
  const optimized = planner.optimizeSchedule(orders, machines);
  
  io.emit('production-update', {
    production: optimized,
    efficiency: optimized.reduce((sum, o) => sum + o.efficiency, 0) / optimized.length
  });

  res.json({ success: true });
});

// Add bottleneck detection endpoint
app.post('/api/production/detect-bottlenecks', express.json(), (req, res) => {
  const { machines } = req.body;
  const bottlenecks = machines
    .filter(m => m.utilization > 90)
    .map(m => ({
      machine: m.id,
      severity: m.utilization > 95 ? 'high' : 'medium',
      predictedTime: new Date(Date.now() + 3600000).toISOString()
    }));

  io.emit('bottleneck-alert', bottlenecks);
  res.json({ bottlenecks });
});

// Existing server code...
