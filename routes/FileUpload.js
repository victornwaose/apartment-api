import express from "express";

import { singleFileUpload } from "../controllers/FileUpload.js";
import { upload } from "../helper/FileHelper.js";

const router = express.Router();

router.post("/", upload.single("file"), singleFileUpload);

export { router };
