import bcrypt from 'bcrypt';
//import the model
import db from '../models/index.js';

const User = db.User;

const login = async (req, res) => {
    //generate token (jwt) after login
}

const logout = async (req, res) => {
    
}

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hash = await bcrypt.hash(password, 10);
        User.create({ username: username, email: email, password: hash });
        res.status(201).json({"message": "Signup successfull."})
    } catch (error) {
        res.status(401).json(error);
    }
}


export { login, logout, signup };