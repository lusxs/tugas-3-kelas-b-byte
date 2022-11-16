import express from "express";
import cors from "cors";
import MahesaRoute from "./routes/MahesaRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(MahesaRoute);

app.listen(5000, () => console.log("server running on port 5000"));
