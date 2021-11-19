import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";

import Config from "./Config.js";
import apartment from "./routes/Apartment.js";
import NotFound from "./middleware/NotFound.js";
import { router } from "./routes/FileUpload.js";

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

//configuration of Mongoosse
dotenv.config();
const mongodbUrl = Config.MONGODB_URL;

mongoose
    .connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to the DB"))
    .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use("/upload", express.static(path.join(__dirname, "upload")));

//middleware

app.use("/api/v1/apartment", apartment);
app.use("/api/apartment/:id", apartment);
app.use("/api/v1/singleFile", router);

app.use(NotFound);

const Port = 5000;

app.listen(Port, () => {
    console.log(`port is working at ${Port}`);
});
