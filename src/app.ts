import express, { Application, Request, Response } from "express";
import { PORT } from "./utils/configs";
import db from "./utils/connect";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.json("Welcome");
});

app.listen(PORT, () => {
  db.on;
  console.log(`App is listening on port ${PORT}`);
});
