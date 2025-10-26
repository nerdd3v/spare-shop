import express from 'express';

import { prisma } from './prisma/src/index.js';

const app = express();

app.use(express.json());

async function startServer() {
    await prisma.$connect();
    console.log('Connected to database');
    
    app.listen(3000, () => {
      console.log(`Server running on http://localhost:3000`);
    });

}

startServer()