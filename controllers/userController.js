const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../model/User")

const jwtSecret = process.env.JWT_SECRET; // Access JWT secret key from environment variable

module.exports = {
  async registerUser(req, res) {
    try {
      // Extract user data from request body
      const { email, password } = req.body;

      // Checking if the user exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Encrypt the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user with encrypted password
      const newUser = await User.create({ ...req.body, password: hashedPassword });

      res.json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  async loginUser(req, res) {
    try {
      // Extract email and password from request body
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({ email });

      // If user not found or password does not match, return error
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Generate JWT token with expiration time (e.g., 1 hour)
      const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '6h' });

      res.json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};
