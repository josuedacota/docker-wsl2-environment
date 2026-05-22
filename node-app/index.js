const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  host: 'postgres-db', // Docker resolverá esto automáticamente por el nombre del servicio
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: 5432,
});

app.get('/', (req, res) => {
  res.json({ status: "success", message: "API Node.js funcionando perfectamente" });
});

app.get('/db-check', async (req, res) => {
  try {
    const dbRes = await pool.query('SELECT NOW()');
    res.json({ status: "connected", timestamp: dbRes.rows[0].now });
  } catch (err) {
    res.status(500).json({ status: "error", error: err.message });
  }
});

app.listen(port, () => {
  console.log(`App corriendo en puerto ${port}`);
});
