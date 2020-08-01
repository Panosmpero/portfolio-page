const express = require("express");
const router = express.Router();
const mailer = require("./mailer");

router.route("/")

  .post((req, res) => {
    const { name, email, message } = req.body;
    const mail = mailer(email, name, message);

    if (!mail) return res.status(400).json({ message: "Error sending email" })
    res.status(200).json({ message: "Email success" })

  })

module.exports = router;