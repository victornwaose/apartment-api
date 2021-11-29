import admin from "../firebaseConfig/firebaseConfig.js";

const Firebase = async (req, res, next) => {
    const token = await req?.headers?.authorization?.split(" ")[1];
    console.log(token);
    try {
        const verified = await admin.auth().verifyIdToken(token);
        if (verified) {
            req.user = verified;
            return next();
        }
        res.status(401).json("user  not authorized ");
    } catch (error) {
        res.status(401).send({
            data: error,
            status: 402,
            message: "error on auth",
        });
    }
};
export default Firebase;
