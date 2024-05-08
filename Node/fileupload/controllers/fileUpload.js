const File = require('../modals/File');
const cloudinary = require('cloudinary').v2;
//localfileupload
exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        console.log('file ', file);
        let path = __dirname + '/files' + Date.now() + `.${file.name.split('.')[1]}`
        console.log('path -> ', path);
        file.mv(path, (err) => {
            console.log(err);
        })
        res.json({
            success: true,
            message: 'File uploaded successfully'
        })
    } catch (error) {

    }
}
const uploadFileToCloudinary = async (file, folder) => {
    const options = { folder }
    options.resource_type = 'auto';
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) => {
    try {
        //data fetch
        console.log(cloudinary);
        const { name, tags, email } = req.body;
        console.log(name, tags, email);
        const file = req.files.imageFile;
        console.log('file is ', file);
        //validation
        const supportedTypes = ['jpg', 'png', 'jpeg'];
        const fileType = file.name.split('.')[1].toLowerCase();

        if (!supportedTypes.includes(fileType)) {
            return res.json({
                success: false,
                message: 'Format not supported'
            })
        }

        const response = await uploadFileToCloudinary(file, 'arundata');
        console.log(response);

        //save entry in db;
        const fileData = await File.create({
            name, tags, email, imageUrl: response.secure_url
        })
        res.json({
            success: true,
            message: 'Image uploaded successfully',
            fileData
        })

    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: 'Something went wrong'
        })
    }
}
exports.videoUpload = async (req, res) => {
    try {
        //data fetch

        const { name, tags, email } = req.body;
        console.log(name, tags, email);
        const file = req.files.videoFile;
        console.log(file);
        //validation
        const supportedTypes = ['mp4', 'mov'];
        const fileType = file.name.split('.')[1].toLowerCase();

        if (!supportedTypes.includes(fileType)) {
            return res.json({
                success: false,
                message: 'Format not supported'
            })
        }
        const response = await uploadFileToCloudinary(file, 'arundata');
        console.log(response);
        //save entry in db;
        const fileData = await File.create({
            name, tags, email, imageUrl: response.secure_url
        })
        res.json({
            success: true,
            message: 'Video uploaded successfully',
            fileData
        })
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: 'Something went wrong'
        })
    }
}