import { DB, USER, PASSWORD, HOST, port as _port} from "../config/db.config.js";
import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    port: _port,
    database: DB
});
