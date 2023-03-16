//import the model
import db from '../models/index.js';

const Role = db.Role;

const getAllRoles = async (req, res) => {
    try {
        const response = await Role.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(401).json(error);
    }
}

const getRoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Role.findOne({ where: { role_id: id}});
        res.status(200).json(response)
    } catch (error) {
        res.status(401).json(error);
    }
}

const createRole = async (req, res) => {
    const role = req.body;
    try {
        await Role.create(role); 
        res.status(201).json({"message": "Role created."})
    } catch (error) {
        res.status(401).json(error);
    } 
}

const updateRoleById = async (req, res) => {
    const { id } = req.params;
    const { role_id, name, description } = req.body;

    try {
        await Role.update({ role_id: role_id, name: name, description: description },
            {where: { role_id:id }});
        res.status(200).json({"message": "Role updated"});
    } catch (error) {
        res.status(401).json(error);
    }
}

const deleteRoleById = async (req, res) => {
    const { id } = req.params;

    try {
        await Role.destroy({ where: { role_id: id }});
        res.status(200).json({"message": "Role deleted."});
    } catch (error) {
        res.status(401).json(error);
    }
}

export { getAllRoles, getRoleById, createRole,updateRoleById, deleteRoleById };