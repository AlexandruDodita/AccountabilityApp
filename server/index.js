
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const app = express();
const PORT = process.env.PORT || 5001;

// Let's log the variables to be 100% sure they are loaded
// console.log("--- Verifying Environment Variables ---");
// console.log("DB_USER:", process.env.DB_USER);
// console.log("DB_HOST:", process.env.DB_HOST);
// console.log("DB_PASSWORD is set:", !!process.env.DB_PASSWORD);
// console.log("-------------------------------------");


if (!process.env.DB_USER || !process.env.DB_PASSWORD) {
    console.error("FATAL ERROR: Database credentials are not loaded. Check your .env file.");
    process.exit(1); 
}

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.use(cors());
app.use(express.json());

// app.get('/api/users', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT id, username, email FROM users'); 
//     res.status(200).json(result.rows);
//   } catch (error) {
//     console.error('ERROR IN /api/users:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

app.post('/api/register', async (req,res) => {
  const {username,email, phoneNumber, password} = req.body;

  if (!username || !password || !email){
    return res.status(400).json({error: "Username, password and email are required."});
  }

  try{
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await pool.query(
      'INSERT INTO users (username, email, "phoneNumber", password_hash) VALUES ($1, $2, $3, $4) RETURNING id, username', [username, email, phoneNumber, passwordHash]);

    res.status(201).json(newUser.rows[0]);
  }catch(error){
    console.error('Error during registeration', error);
    res.status(500).json({error: 'User registration failed.'});
  }
});

app.post('/api/login', async(req,res) => {
  const {username, password} = req.body;

  if (!username || !password){
    return res.status(400).json({error: 'Username and password are required.'});
  }

  try{
    const result = await pool.query('SELECT * FROM users where username = $1', [username]);
    const user=result.rows[0];
    if (!user){
      return res.status(401).json({error: 'Invalid username or password'});
    }
    const isPasswordCorrect=await bcrypt.compare(password, user.password_hash);

    if(!isPasswordCorrect){
      return res.status(401).json({error: 'Invalid username or password.'});
    }

    res.status(200).json({
      message: 'Login succesful!',
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });

  }catch(error){
    console.error('Error during login:', error);
    res.status(500).json({error: 'An internal server error occured.'});
  }
})


app.listen(PORT, () => {
    console.log(`✅ Server is running on Port ${PORT}`);
});