
const express = require('express');
const session = require('express-session')
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const User = require('./models/employees');

const app = express();
const dbURI = 'mongodb+srv://new-user:abc@cluster0.ndib7gv.mongodb.net/Web-proj?retryWrites=true&w=majority&appName=Web-proj'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result =>{
    app.listen(8080);
    console.log('mongodb connected successfully');
  })
  .catch(err => console.log(err));

 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(fileUpload());
app.use(express.static('public'));
app.use(session({
  secret: 'zeina123mohammed',
  resave: false,
  saveUninitialized: true
}));
app.set('view engine', 'ejs');
app.set('views','./views');
app.get("/", (req, res) => {
  res.render('index', { user: req.session.user }); 

});

const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

app.use("/", indexRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.get('/profile', (req, res) => {
  const user = req.session.user || { Image: 'default.jpg', name: 'Unknown' };
  res.render('profile', { user });
});
// Route for user signup
app.post('/signup', async (req, res) => {
  const { name, email,password,usertype } = req.body;

  try {
    const existingUser = await User.findOne({ email:email});
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

   const newuser = new User({ 
        name,
        email,
        password,
        usertype
     });
     await newuser.save();
      res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    if (error.name === 'ValidationError')
       {
      return res.status(400).json({ error: error.message });
    } else 
    {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Failed to register user' });
    }
  }
});


app.use((req, res) => {
  const user = req.session.user || { Image: 'default.jpg', name: 'Unknown' };
  res.status(404).render('404', { user });
});
