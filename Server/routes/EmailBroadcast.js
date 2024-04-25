const express = require("express")
const router = express.Router()
const { sendEmail } = require("../utils/emailSender");

router.post('/broadcast-email', async (req, res) => {

    const { recipients, subject, message } = req.body;
  
    try {
      for (const recipient of recipients) {
        await sendEmail(recipient, subject, message);
      }
      res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
      console.error('Error broadcasting email:', error);
      res.status(500).json({ message: 'Failed to broadcast emails' });
    }
  });

  module.exports = router;
