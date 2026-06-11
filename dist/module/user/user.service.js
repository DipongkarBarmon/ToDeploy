import { pool } from "../../db/index.js";
import bcrypt from "bcrypt";
const createUserIntoDB = async (payload) => {
    const { name, email, password, age, role } = payload;
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(` 
      insert into 
      users(name,email,password,age,role) 
      values($1,$2,$3,$4,coalesce($5,'user')) returning *
      `, [name, email, hashPassword, age, role]);
    delete result.rows[0].password;
    return result;
};
const fatchAllUserFromDB = async () => {
    const result = await pool.query(`
              select * from users
          `);
    return result;
};
const fatchUserByIdFromDB = async (id) => {
    const result = await pool.query(`
            select * from users where id = $1
        `, [id]);
    return result;
};
const updateUserInfoFromDB = async (id, payload) => {
    const { name, password, is_active } = payload;
    const result = await pool.query(`
          update users
          set name = coalesce($1,name),
          password =coalesce($2,password),
          is_active=coalesce($3,is_active)
          where id =$4 returning *
      `, [name, password, is_active, id]);
    return result;
};
const deleteUserInfoFromDB = async (id) => {
    const result = await pool.query(`
            delete from users where id = $1
        `, [id]);
    return result;
};
export const userServic = {
    createUserIntoDB,
    fatchAllUserFromDB,
    fatchUserByIdFromDB,
    updateUserInfoFromDB,
    deleteUserInfoFromDB
};
//# sourceMappingURL=user.service.js.map