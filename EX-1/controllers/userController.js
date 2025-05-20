import users from '../models/userModel.js';

const listUsers = async (req,res) => {
    res.json(users);
};

const getUser = async (req,res) => {
    const user = users.find(user=> user.id === parseInt(req.params.id));
   if (!user) return res.status(404).json({ error: 'User not found' });
   res.json(user);
};

const createUser = async (req,res) => {
    const { name , email } = req.body;
    if(!name || !email) {
        return res.status(400).json({ error: 'Name and email are required ' });
    }
    let newId = 1;

if (users.length > 0) {
    const ids = users.map(user => user.id);
    const highestId = Math.max(...ids);
    newId = highestId + 1;
}

// Create the new user object
const newUser = {
    id: newId,
    name,
    email
};
    users.push(newUser);
    res.status(201).json(newUser);
};

const updateUserbyId = async (req,res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;

    res.json(user);

};

const deleteUserbyId = async (req,res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) return res.status(404).json({ error: 'User not found' });

    users.splice(index, 1);
    res.status(204).send();
};

export {listUsers,getUser,createUser,updateUserbyId,deleteUserbyId};