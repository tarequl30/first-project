import express, { Request, Response, Application } from "express";
const app: Application = express();
import cors from "cors";

//parser
app.use(express.json());
app.use(cors());

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get("/", getAController);

export default app;
