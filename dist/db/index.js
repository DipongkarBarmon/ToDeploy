import { Pool } from "pg";
import config from "../config/index.js";
export const pool = new Pool({
    connectionString: config.connection_string
});
export const initDB = async () => {
    try {
        await pool.query(`
              create table if not exists users (
                id serial primary key,
                name varchar(20) not null,
                email varchar(50) not null unique, 
                password text not null  ,
                is_active boolean default true,
                age int,
                role varchar(10) default 'user' check(role in('user','admin','agent')),
                createdAt timestamp default now(),
                updateAt timestamp default now()
              )
          `),
            await pool.query(`
             create table if not exists profiles (
                id serial primary key,
                user_id int references users(id) on delete cascade,
                bio text,
                address text,
                phone varchar(12),
                gender varchar(10),
                createdAt timestamp default now(),
                updateAt timestamp default now()
             )
          `);
        console.log(`Database connect succesfully!`);
    }
    catch (error) {
        console.log(`Database fail to connect succesfully!`);
        console.log(error);
    }
};
//# sourceMappingURL=index.js.map