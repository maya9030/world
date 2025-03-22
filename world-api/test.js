const cors = require('cors');
const express = require('express');

const middleware = cors({ origin: 'http://example.com' });

console.log(typeof middleware);           // → 'function'
console.log(middleware.name);             // → 'corsMiddleware'（または 'middlewareWrapper'）
console.dir(middleware);                  // → 中身を見てみる
console.log(require.resolve('cors'));