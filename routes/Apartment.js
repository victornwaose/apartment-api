import express from "express";
import {
    getAllApartment,
    createApartment,
    getApartment,
    deleteApartment,
    updateApartment,
} from "../controllers/Apartment.js";

import Firebase from "../middleware/Firebase.js";

const apartment = express.Router();

apartment.use(Firebase);

apartment.route("/").get(getAllApartment);
apartment.route("/:id").get(getApartment);
apartment.route("/").post(createApartment);
apartment.route("/:id").delete(deleteApartment);
apartment.route("/:id").patch(updateApartment);

export default apartment;
