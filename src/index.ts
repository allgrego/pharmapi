import express, { Express, Request, Response } from 'express';
import './setup/env'
import routes from './routes'

const app: Express = express();
const port = process.env.PORT;
const baseURL = process.env.APP_BASE_URL;

// Middlewares previous config
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// All Routes
app.use("/", routes);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at ${baseURL}:${port}`);
});