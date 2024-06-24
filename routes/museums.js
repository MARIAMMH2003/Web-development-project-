const express = require('express');
const { addMuseum, upload,getAllMuseums,searchMuseumsByName } = require('../controllers/Museum');
const router = express.Router();
const Monument = require('../models/monument'); 
const Museum = require('../models/museum'); 


museumController=require('../controllers/Museum');


// Example route to get monuments
router.get('/monuments', async (req, res) => {
    try {
        const monuments = await Monument.find();
        res.status(200).json(monuments);
    } catch (error) {
        console.error('Error fetching monuments:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});
router.get('/', async (req, res) => {
  try {
    const museums = await Museum.find(); // Fetch museums from MongoDB
    res.render('museums', { museums }); // Pass museums data to the 'museums' template
  } catch (error) {
    console.error('Error fetching museums:', error);
    res.status(500).json({ message: 'Error fetching museums' });
  }
});

// new
// router.get('/search', async (req, res) => {
//   const query = req.query.name ? req.query.name.toLowerCase() : '';

//   if (!query) {
//     return res.status(400).json({ message: 'Please provide a search query.' });
//   }

//   try {
//     const museums = await Museum.find({ title: { $regex: query, $options: 'i' } });

//     if (museums.length === 0) {
//       return res.status(404).json({ message: 'No museums found.' });
//     }

//     res.status(200).json({ museums });
//   } catch (error) {
//     console.error('Error searching museums by name:', error);
//     res.status(500).json({ message: 'Failed to search museums by name.' });
//   }
// });
router.get('/search', searchMuseumsByName);
// new
router.get('/add', (req, res) => {
  res.render("newMuseum");
});

router.get('/edit/:id', async (req, res) => {
  try {
    const museum = await Museum.findById(req.params.id);
    if (!museum) {
      return res.status(404).json({ message: 'Museum not found' });
    }
    res.render('editMuseum', { museum });
  } catch (error) {
    console.error('Error fetching museum:', error);
    res.status(500).json({ message: 'Error fetching museum' });
  }
});

router.get('/allMuseums', async (req, res) => {
  try {
    const museums = await Museum.find();
    res.json(museums);
  } catch (error) {
    console.error('Error fetching all museums:', error);
    res.status(500).json({ message: 'Error fetching all museums' });
  }
});




router.post('/add', addMuseum);
router.post('/addmonument', museumController.addMonument);
router.get('/allMuseums', getAllMuseums);
router.get('/search', searchMuseumsByName);

module.exports = router;
