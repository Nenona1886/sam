import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "20.206.248.154";
export const DB_USER = process.env.DB_USER || "jdbuser";
export const DB_PASSWORD = process.env.DB_PASSWORD || "JDBmysql$7020";
export const DB_DATABASE = process.env.DB_DATABASE || "companydb";
export const DB_PORT = process.env.DB_PORT || 3306;
