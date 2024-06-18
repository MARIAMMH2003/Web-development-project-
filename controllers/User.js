const Employees = require('../models/employees');
  const AddUser = async (req, res) => {
 const { name, password, email, usertype } = req.body;

  try {
        const existingUser = await Employees.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }
   const newUser = new Employees({
            name,
            password,
            email,
            usertype
        });
          await newUser.save();
           res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
           console.error('Error registering user:', error);
            res.status(500).json({ error: 'Failed to register user' });
    }
};

const GetUser = async (req, res) => {
    const {name,password,email,usertype } = req.body;

    try {
        const user = await Employees.findOne({ name: name,password:password, email:email, usertype:usertype });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        req.session.user = user;
        res.redirect('/user/profile');
    } catch (error) {
        console.error('Error finding user:', error);
        res.status(500).json({ error: 'Failed to get user' });
    }
};

const checkUN = async (req, res) => {
    const {email } = req.body;

       try {
     const existingUser = await Employees.findOne({ email });
         if (existingUser) {
           res.send('taken');
        } else {
            res.send('available');
        }
    } catch (error) {
        console.error('Error checking username:', error);
        res.status(500).json({ error: 'Failed to check username' });
    }
};

const editUser = async (req, res) => {
    const { password } = req.body;
    const userId = req.session.user._id;

    try {
        const updatedUser = await Employees.findByIdAndUpdate(userId, { password: password }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        req.session.user.password = password;
        res.redirect('/user/profile');
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Failed to update user' });
    }
};

module.exports = {
    AddUser,
    GetUser,
    checkUN,
    editUser
};
