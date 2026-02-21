import mysql from "mysql2/promise";

export const mysqlPool = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "root",
  database: "college_db"
});
