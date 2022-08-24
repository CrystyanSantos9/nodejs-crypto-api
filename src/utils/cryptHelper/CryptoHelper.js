const { createCipheriv, createDecipheriv, randomBytes } = require('crypto');
const { Buffer } = require('node:buffer');

class CryptoHelper {
  constructor({ cryptokey }) {
    this.cryptoConfig = Object.values({
      algorithm: 'aes-192-ecb',
      cryptokey,
      initializationVectorKey: null, // para CFB preciso de Buffer.alloc(16)
    });
  }

  // vamos criar um factory para recebe a secret
  // e retornar uma instância da nossa classe
  static async setup({ cryptokey }) {
    return new CryptoHelper({ cryptokey });
  }

  async encrypt(data) {
    const cipher = createCipheriv(...this.cryptoConfig);

    return cipher
      .update(data, 'utf-8', 'base64')
      .concat(cipher.final('base64'));
  }

  async decrypt(data) {
    const cipher = createDecipheriv(...this.cryptoConfig);

    return cipher
      .update(data, 'base64', 'utf-8')
      .concat(cipher.final('utf-8'));
  }
}

module.exports = CryptoHelper;
