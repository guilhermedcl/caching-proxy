const { Command } = require('commander');

function parseArgs() {
  const program = new Command();

  program
    .option('--port <number>', 'Porta para o servidor proxy')
    .option('--origin <url>', 'URL do servidor de origem')
    .option('--clear-cache', 'Limpa o cache e encerra');

  program.parse(process.argv);

  return program.opts();
}

module.exports = parseArgs;
