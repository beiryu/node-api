import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'node-api',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Node.js API!!!'
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Node.js API listening on port ${port}`);
});