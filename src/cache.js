const cache = new Map();

function get(key) {
  return cache.get(key);
}

function set(key, value) {
  cache.set(key, value);
}

function has(key) {
  return cache.has(key);
}

function clear() {
  cache.clear();
}

module.exports = {
  get,
  set,
  has,
  clear
};