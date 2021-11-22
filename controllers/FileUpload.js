import SingleFile from "../modules/SingleFile.js";

const singleFileUpload = async (req, res, next) => {
    try {
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileSize: req.file.size,
            fileType: fileSizeFormatter(req.file.size, 2),
        });
        await file.save();
        console.log(file, "file");
        res.status(201).send("File Uploaded Successfully");
    } catch (error) {
        console.log(error, "error was created at controller");
        res.status(400).send({
            data: error,
            status: 500,
            message: "error on loading images",
        });
    }
};

const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) return "0 Bytes";

    const dm = decimal || 2;
    const sizes = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return (
        parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) +
        " " +
        sizes[index]
    );
};

export { singleFileUpload };
