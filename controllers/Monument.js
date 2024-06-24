const Museum = require('../models/museum');
const Monument = require('../models/monument');
const path = require('path');




const addMonument = async (req, res) => {
    try {
        const { museumId, name,description } = req.body;
        const newMonument = new Museum({ museumId, name,description });

        if (req.files && req.files.picture) {
            const pictureFile = req.files.picture;
            const uploadPath = path.join(__dirname, '../Content', `${Date.now()}_${pictureFile.name}`);

            // Move the file to the uploads directory
            pictureFile.mv(uploadPath, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
            });

            picture = `/Content/${path.basename(uploadPath)}`;
            newMonument.picture = picture;
        }

        await newMmonument.save();
        res.status(201).json(newMuseum);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = {

    addMonument
   
};

