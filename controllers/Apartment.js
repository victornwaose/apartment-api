import Apartment from "../modules/Apartment.js";

const getAllApartment = async (req, res) => {
    try {
        const getApartment = await Apartment.find({});
        res.status(201).json({ getApartment });
    } catch (err) {
        res.status(500).json({ msg: err });
    }
};

const createApartment = async (req, res) => {
    try {
        const apartment = await Apartment.create(req.body);
        res.status(201).json({ apartment });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: err });
    }
};

const getApartment = async (req, res) => {
    try {
        const { id: ApartmentId } = req.params;
        const carousel = await Apartment.findOne({ _id: ApartmentId });
        res.status(201).json({ apartment });
        if (!carousel) {
            return res.status(404).json({ msg: error });
        }
    } catch (error) {
        res.status(402).json({ msg: error });
    }
};
const deleteApartment = async (req, res) => {
    try {
        const { id: ApartmentId } = req.params;
        const apartment = await Apartment.findOneAndDelete({
            _id: ApartmentId,
        });
        if (!apartment) {
            return res.status(404).json({ msg: error });
        }
        res.status(201).json({ apartment });
    } catch (error) {
        res.status(402).json({ msg: error });
    }
};

const updateApartment = async (req, res) => {
    try {
        const { id: ApartmentID } = req.params;
        const apartment = await Apartment.findOneAndUpdate(
            { _id: apartmentID },
            req.body,
            { new: true, runValidators: true }
        );
        if (!Apartment) {
            return res
                .status(404)
                .json({ msg: `No Apartment with id: ${ApartmentID}` });
        }
    } catch (err) {
        res.status(500).json({ msg: error });
    }
};

export {
    getAllApartment,
    createApartment,
    getApartment,
    deleteApartment,
    updateApartment,
};
