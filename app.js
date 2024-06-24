require('dotenv').config();

const express = require('express');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();

// Replace this with process.env.MONGO_URI after creating the .env file
const dbURI = 'mongodb+srv://new-user:abc@cluster0.ndib7gv.mongodb.net/Web-proj?retryWrites=true&w=majority&appName=Web-proj';

mongoose.connect(dbURI)
  .then(result => {
    app.listen(process.env.PORT || 8080);
    console.log('mongodb connected successfully');
  })
  .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(express.static('public'));
app.use('/Content', express.static(path.join(__dirname, 'Content')));
app.use(session({
  secret: 'zeina123mohammed',
  resave: false,
  saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const museumRoutes = require('./routes/museums');
const highlightRoutes = require('./routes/highlights'); // Add your highlight routes here

app.use('/museums', museumRoutes);
app.use('/highlights', highlightRoutes); // Use the highlight routes
app.use("/", indexRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.get('/profile', (req, res) => {
  const user = req.session.user || { Image: 'default.jpg', name: 'Unknown' };
  res.render('profile', { user });
});

app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

app.post('/signup', async (req, res) => {
  const { name, email, password, usertype } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    let hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      usertype
    });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    } else {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Failed to register user' });
    }
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'user not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    req.session.user = user;
    res.status(200).json({ message: 'Login successful', usertype: user.usertype });

  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
});

app.use((req, res) => {
  const user = req.session.user || { Image: 'default.jpg', name: 'Unknown' };
  res.status(404).render('404', { user });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
