import express from "express";
import cors from "cors";
import dbConnect from "./config/dbConnect";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Database connected and listing on port ${port}`);
    });
  })
  .catch((err) => {
    console.log((err as Error).message);
  });
