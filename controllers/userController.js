//import the model
import db from '../models/index.js';

const User = db.User;

const getAllUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(401).json(error);
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await User.findOne({ where: { id: id}});
        res.status(200).json(response)
    } catch (error) {
        res.status(401).json(error);
    }
}

const createUser = async (req, res) => {
    const user = req.body;
    try {
        await User.create(user); 
        res.status(201).json({"message": "User created."})
    } catch (error) {
        res.status(401).json(error);
    } 
}

const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;

    try {
        await User.update({ username: username, email: email, password: password },
            {where: { id:id }});
        res.status(200).json({"message": "User updated"});
    } catch (error) {
        res.status(401).json(error);
    }
}

const deleteUserById = async (req, res) => {
    const { id } = req.params;

    try {
        await User.destroy({ where: { id: id }});
        res.status(200).json({"message": "User deleted."});
    } catch (error) {
        res.status(401).json(error);
    }
}

export { getAllUsers, getUserById, createUser,updateUserById, deleteUserById };