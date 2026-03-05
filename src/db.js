import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "shoppingcart_db_user",
  host: "dpg-d6kjbmd6ubrc73ehf92g-a.oregon-postgres.render.com",
  database: "shoppingcart_db",
  password: "foZ32pLQWCDvZmTFZ7XWJFXFPpSfWDTs",
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});