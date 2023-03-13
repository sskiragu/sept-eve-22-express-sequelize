import express from 'express';

//import the controller
const router = express.Router();

const users = [
    {"id": 1, "name": "Joe"},
    {"id": 2, "name": "Jane"}
];

//define endpoints
router.get('/users', (req, res) => {
    res.status(200).json(users);
});

router.get('/users/:id', (req, res) => {
    const id = req.params;
});

router.post('/users', (req, res) => {
    const user = req.body;
});

router.patch('/users/:id', (req, res) => {
    const id = req.params;
});

router.delete('/users/:id', (req, res) => {
    const id = req.params;
});

export default router;