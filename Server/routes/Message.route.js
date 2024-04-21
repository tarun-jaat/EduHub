const express =require('express');
const { sendMessage, getMessages } = require("../Controllers/message.controller.js");
const protectRoute = require('../Middlewares/Protect.js');


const router  = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/getMessages/:id", protectRoute, getMessages);

module.exports= router; 