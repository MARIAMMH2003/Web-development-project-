const Museum = require('../models/museum');
const Monument = require('../models/monument');
const Comment = require('../models/comment');
const Employees = require('../models/employees');

const path = require('path');


const addComment = async (req, res) => {
    try {
        const {  username, museumId ,content} = req.body; // Assuming museumId is passed in req.body
        
        // Create a new Comment instance
        const newComment = new Comment({ username, museum: museumId ,content });


        // Save the new comment to the database
        await newComment.save();

        // Respond with the created comment
        res.status(201).json(newComment);
    } catch (error) {
        // Handle errors
        res.status(500).send({ message: error.message });
    }
};

const addMuseum = async (req, res) => {
    try {
        const { title, slogan, date, overview,price } = req.body;
        const newMuseum = new Museum({ title, slogan, date, overview ,price});

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
const getMuseumByIdMonuments = async (req, res) => {
    try {
        const museumId = req.params.id;
        const museum = await Museum.findById(museumId);
        const monuments = await Monument.find({ museumId: museumId });

        if (!museum) {
            return res.status(404).json({ message: 'Museum not found' });
        }

        res.render('editMuseum', { museum, monuments });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const addMonument = async (req, res) => {
        try {
            const { MuseumId, name, description } = req.body;
            const newMonument = new Monument({ MuseumId, name, description }); // Changed to Monument model
    
            if (req.files && req.files.picture) {
                const pictureFile = req.files.picture;
                const uploadPath = path.join(__dirname, '../Content', `${Date.now()}_${pictureFile.name}`);
    
                // Move the file to the uploads directory
                pictureFile.mv(uploadPath, (err) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                });
    
                newMonument.picture = `/Content/${path.basename(uploadPath)}`;
            }
    
            await newMonument.save(); // Fixed variable name typo from newMmonument to newMonument
            res.status(201).json(newMonument);
        } catch (error) {
            res.status(500).send({ message: error.message });
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
const getAllMonuments = async (req, res) => {
    try {
        const monuments = await Monument.find();
        res.status(200).json(monuments);
    } catch (error) {
        console.error('Error fetching monuments:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
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
  const searchMuseumsByName = async (req, res) => {
    const query = req.query.name ? req.query.name.toLowerCase() : '';
  
    if (!query) {
      return res.status(400).json({ message: 'search quer empty' });
    }
  
    try {
      const museums = await Museum.find({ title: { $regex: query, $options: 'i' } });
  
      if (museums.length === 0) {
        return res.status(404).json({ message: 'no museums found' });
      }
  
      res.status(200).json({ museums });
    } catch (error) {
      console.error( error);
      res.status(500).json({ message: 'Failed to search museums' });
    }
  };

module.exports = {
    addMuseum,
    addMonument,
    getMuseumById,
    getMuseumByIdMonuments,addComment,
    getAllMuseums,searchMuseumsByName,getAllMonuments
};
