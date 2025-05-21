import { journalists } from '../models/data.js';

const listJournalists = async (req,res) => {
    res.json(journalists);
};

const getJournalist = async (req,res) => {
    const journalist = journalists.find(journalist=> journalist.id === parseInt(req.params.id));
   if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
   res.json(journalist);
};

const createJournalist = async (req,res) => {
    const { name , email } = req.body;
    if(!name || !email) {
        return res.status(400).json({ error: 'Name and email are required ' });
    }
    let newId = 1;

if (journalists.length > 0) {
    const ids = journalists.map(journalist => journalist.id);
    const highestId = Math.max(...ids);
    newId = highestId + 1;
}

// Create the new user object
const newJournalist = {
    id: newId,
    name,
    email
};
    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
};

const updateJournalistbyId = async (req,res) => {
    const id = parseInt(req.params.id);
    const journalist = journalists.find(journalist => journalist.id === id);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    
    const { name, email } = req.body;
    if (name) journalist.name = name;
    if (email) journalist.email = email;

    res.json(journalist);

};

const deleteJournalistbyId = async (req,res) => {
    const id = parseInt(req.params.id);
    const index = journalists.findIndex(journalist => journalist.id === id);

    if (index === -1) return res.status(404).json({ error: 'Journalist not found' });

    journalists.splice(index, 1);
    res.status(204).send();
};

export {listJournalists,getJournalist,createJournalist,updateJournalistbyId,deleteJournalistbyId};