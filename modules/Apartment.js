import mongoose from "mongoose";

const ApartmentSchema = new mongoose.Schema({
    name: { type: String, required: [true, "name must provided"], trim: true },
    price: { type: Number, required: [true, "type must be provided"] },
    type: {
        type: String,
        required: [true, "type must be provided"],
        trim: true,
    },
    bedrooms: {
        type: Number,
        required: [true, "bedrooms must be provided"],
    },
    bathrooms: {
        type: Number,
        required: [true, "bathrooms must be provided"],
    },
    garage: {
        type: Number,
        required: [true, "garage must be provided"],
    },
    location: {
        type: String,
        required: [true, "location must provided"],
        trim: true,
    },
    address: {
        type: String,
        required: [true, "location must be provided"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "description must provided"],
        trim: true,
    },
    images: {
        data: Buffer,
        contentType: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Apartment = mongoose.model("Apartment", ApartmentSchema);

export default Apartment;
