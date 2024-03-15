const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT2 || 5002;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${process.env.EMAIL}`,
    pass: `${process.env.EMAIL_PASS}`,
  },
});

app.post('/api/send-message', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const mailOptions = {
    from: `${email}`,  // Using the user's email as the sender
    to: 'marinersdrive.com@gmail.com',
    subject: 'New Message from Contact Form',
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
