import express, { Request, Response, Express } from "express";
import taskRoute from "./routes/eventRoute";

const app: Express = express();

app.use(express.json());
app.use("/event", taskRoute);

export default app;
