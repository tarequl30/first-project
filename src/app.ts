import express, { Request, Response, Application } from "express";
const app: Application = express();
import cors from "cors";

//parser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
