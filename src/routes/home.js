const express = require('express');
const { run } = require('../utils/handlefiles/handleFiles');

const router = express.Router();

router.get('/', async (req, res) => {
  const message = req.socket.remoteAddress;
  const messageEncrypted = await run(message);
  res.status(200).send({ message: `Encrypted message ${messageEncrypted}` });
});

module.exports = router;
