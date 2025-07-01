const express = require('express');
const axios = require('axios');
const cache = require('./cache');

function startServer(port, origin) {
  const app = express();

  app.use(async (req, res) => {
    const cacheKey = req.originalUrl;

    if (cache.has(cacheKey)) {
      const cached = cache.get(cacheKey);
      res.set('X-Cache', 'HIT');
      return res.status(cached.status).set(cached.headers).send(cached.data);
    }

    try {
      const originUrl = origin + req.originalUrl;
      const response = await axios.get(originUrl);

      // Salva no cache
      cache.set(cacheKey, {
        status: response.status,
        headers: response.headers,
        data: response.data,
      });

      res.set('X-Cache', 'MISS');
      res.status(response.status).set(response.headers).send(response.data);
    } catch (err) {
      const status = err.response?.status || 500;
      const data = err.response?.data || 'Erro ao buscar do origin';
      res.status(status).send(data);
    }
  });

  app.listen(port, () => {
    console.log(`✅ Proxy ativo em http://localhost:${port}`);
  });
}

module.exports = startServer;