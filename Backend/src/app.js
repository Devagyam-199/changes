import express from "express"
import cors from "cors"
import globalErrorHandler from "./utilities/globalErrorHandler.utils.js"
import cookieParser from "cookie-parser"

const app = express();

const corsOptions = {
  origin: "http://localhost:8080",
  methods: ["GET", "POST", "PUT", "DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());



app.use(globalErrorHandler);

export default app;