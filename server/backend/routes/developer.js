// routes/developers.js
const express = require('express');
const router = express.Router();
const Developer = require('../models/Developers');



router.post('/chats', async (req, res) => {
  try {
    const newChat = await Developer.create(req.body);
    res.status(201).json(newChat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/chats', async (req, res) => {
  try {
    const chats = await Developer.find();
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// -------



module.exports = router;
