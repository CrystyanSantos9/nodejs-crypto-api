const eventOrder = require('./constants');

class CustomFSPromises {
  constructor({ cryptoHelper }) {
    this.cryptoHelper = cryptoHelper;
  }

  // método de escrito igual o fs do node
  async writeFile(filename, data, enconding = '') {
    const encryptedData = await this.cryptoHelper.encrypt(data);

    return Object.values({
      filename,
      encryptedData,
      enconding,
    });
  }

  configure() {
    const configuration = new Map();
    const writeFileOptions = {
      when: eventOrder.beforeOriginalCall,
      fn: this.writeFile.bind(this),
    };
    configuration.set(this.writeFile.name, writeFileOptions);
    return configuration;
  }
}

module.exports = CustomFSPromises;
