import express, { Express } from 'express';
import './common/setup/env'

const app: Express = express();

// Middlewares previous config
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

export default app