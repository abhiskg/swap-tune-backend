import express from "express";
import cors from "cors";
import dbConnect from "./config/dbConnect";
import user from "./routes/user";
import category from "./routes/category";
import product from "./routes/product";
import order from "./routes/order";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/user", user);
app.use("/api/category", category);
app.use("/api/product", product);
app.use("/api/order", order);

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Database connected and listing on port ${port}`);
    });
  })
  .catch((err) => {
    console.log((err as Error).message);
  });
