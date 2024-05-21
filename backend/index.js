import { json } from "body-parser";
import express from "express";
import cors from 'cors'
app = express();
app.use(json());
app.use(cors());
