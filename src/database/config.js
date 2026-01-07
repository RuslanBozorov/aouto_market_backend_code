import { Pool } from "pg";
import { config } from "dotenv";
config()

const pool = new Pool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE,
})

async function db_connect() {
    try {
        pool.connect()
        console.log("✅Database ulandi")
    } catch (error) {
        console.log("❌Database uzildi yoki muammo");
    }
}

db_connect()

export default pool