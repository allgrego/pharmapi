import app from './app';
import routes from './routes'

const port = process.env.PORT
const baseURL = process.env.APP_BASE_URL

// All Routes
app.use("/", routes)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at ${baseURL}:${port}`)
});
