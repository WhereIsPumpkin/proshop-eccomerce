import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import porductRoutes from "./routes/productRoutes.js";
dotenv.config();
import connect from "./database/mongo.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;

connect();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/api/products", porductRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
