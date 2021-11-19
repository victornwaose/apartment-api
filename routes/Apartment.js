import express from "express";
import {
    getAllApartment,
    createApartment,
    getApartment,
    deleteApartment,
    updateApartment,
} from "../controllers/Apartment.js";

const apartment = express.Router();

apartment.route("/").get(getAllApartment);
apartment.route("/").post(createApartment);
apartment.route("/:id").get(getApartment);
apartment.route("/:id").delete(deleteApartment);
apartment.route("/:id").patch(updateApartment);

export default apartment;
