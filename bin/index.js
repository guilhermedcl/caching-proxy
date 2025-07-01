const parseArgs = require('../src/args');
const startServer = require('../src/server');
const cache = require('../src/cache');

const options = parseArgs();

if (options.clearCache) {
  cache.clear();
  console.log('🧹 Cache limpo com sucesso!');
  process.exit(0);
}

if (!options.port || !options.origin) {
  console.log('⚠️  Uso correto: caching-proxy --port <número> --origin <url>');
  process.exit(1);
}

console.log(`🚀 Iniciando proxy na porta ${options.port}`);
console.log(`🌍 Encaminhando requisições para: ${options.origin}`);

startServer(options.port, options.origin);