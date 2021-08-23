const express = require(`express`);
const router = express.Router();

const chatbotController = require("../../controllers/chatbotController");

const { botIntro, botReply, botInput} = chatbotController; 

router.get("/intro", botIntro);
router.get("/reply/:id", botReply);
router.post("/input", botInput);

module.exports = router;