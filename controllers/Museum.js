const Museum = require('../models/museum');
const Monument = require('../models/monument');
const path = require('path');


const addMuseum = async (req, res) => {
    try {
        const { title, slogan, date, overview } = req.body;
        const newMuseum = new Museum({ title, slogan, date, overview });

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
            newMuseum.picture = picture;
        }

        await newMuseum.save();
        res.status(201).json(newMuseum);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const addMonument = async (req, res) => {
    try {
        const { museumId, picture, description } = req.body;
        const museum = await Museum.findById(museumId);
        if (!museum) {
            return res.status(404).json({ message: 'Museum not found' });
        }
        const newMonument = new Monument({ museumId, picture, description });
        await newMonument.save();
        res.status(201).json(newMonument);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getMuseumById = async (req, res) => {
    try {
        const museumId = req.params.id;
        const museum = await Museum.findById(museumId).populate('monuments'); // Assuming 'monuments' is a reference field in the Museum schema
        if (!museum) {
            return res.status(404).json({ message: 'Museum not found' });
        }
        res.status(200).json(museum);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllMuseums = async (req, res) => {
    try {
      console.log('Fetching all museums...');
      const museums = await Museum.find().populate('monuments');
      console.log('Museums found:', museums);
      
      res.status(200).json(museums);
    } catch (error) {
      console.error('Error fetching museums:', error);
      res.status(500).json({ message: error.message });
    }
  };
  

module.exports = {
    addMuseum,
    addMonument,
    getMuseumById,
    getAllMuseums
};
