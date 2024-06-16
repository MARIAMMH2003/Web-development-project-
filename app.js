const express = require('express');
const session = require('express-session')
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const User = require('./models/employees');
// express app
const app = express();
const dbURI = 'mongodb+srv://new-user:abc@cluster0.ndib7gv.mongodb.net/Web-proj?retryWrites=true&w=majority&appName=Web-proj'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result =>{
    app.listen(8083);
    console.log('mongodb connected successfully');
  })
  .catch(err => console.log(err));

 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(fileUpload());
app.use(express.static('public'));
app.use(session({
  secret: 'zeina1234mohammed', // Replace with a strong, random string
  resave: false,
  saveUninitialized: true
}));
app.set('view engine', 'ejs');

const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

app.use("/", indexRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
// Route for user signup
app.post('/signup', async (req, res) => {
  const { name, email, password, userType } = req.body;

  try {
      // Check if user with the same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ error: 'Email already registered' });
      }

      // Create a new user object based on the User model
      const newUser = new User({
          name,
          email,
          password,
          userType
      });

      // Save the new user to the database
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Failed to register user' });
  }
});


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { user: (req.session.user === undefined ? "" : req.session.user) });
});
