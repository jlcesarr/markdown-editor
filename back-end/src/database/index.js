import pg from 'pg';

const { Client } = pg;

const client = new Client({
  host: 'localhost',
  port: 5437,
  user: 'markdown',
  password: 'markdown',
  database: 'markdown_api',
});

client.connect()
  .catch((err) => {
    console.log('Database Error ', err);
    process.exit();
  });

// eslint-disable-next-line no-shadow
const query = async (query, values = []) => {
  const { rows } = await client.query(query, values);
  return rows;
};

export default { query };
