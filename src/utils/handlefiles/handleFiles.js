const { promises } = require('fs');


async function run(message) {
  // com enc no final, o sistema sabe que é encriptado
  const fileTarget = 'file-secure.txt.enc';
  console.log('writing file to:', fileTarget);
  const text = `Texto ${message} recebido em ${new Date().toISOString()}`;

  // salva dados no sistema (path, messagem)
  await promises.writeFile(fileTarget, text);
  // já lista dados
  console.log('decrypeted content: ', (await promises.readFile(fileTarget)).toString());
  console.log('finished');
}

module.exports = { run };
