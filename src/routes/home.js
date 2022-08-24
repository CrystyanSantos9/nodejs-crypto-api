const express = require('express');
const { run } = require('../utils/handlefiles/handleFiles');
const CryptoHelper = require('../utils/cryptHelper/CryptoHelper');
const CustomFSPromises = require('../utils/customFSPromises/CustomFSPromises');

const router = express.Router();

router.get('/', async (req, res) => {
  // tem que ter 24 caracteres
  const config = {
    // aes 192
    // 24 chars * 8 = 192 bits
    cryptokey: 'senha-segura-com-seguran',
  };

  const cryptoHelper = await CryptoHelper.setup(config);
  const customFSPromises = new CustomFSPromises({ cryptoHelper }).configure();

  // await run(message);

  res.status(200).send({ message: 'ok' });
});

module.exports = router;
