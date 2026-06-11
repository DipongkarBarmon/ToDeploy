import { pool } from "../../db/index.js";
import bcrypt from "bcrypt";
import jwt, {} from 'jsonwebtoken';
import config from "../../config/index.js";
const loginUserIntoDB = async (payload) => {
    const { email, password } = payload;
    const userdata = await pool.query(`
        select * from users WHERE email = $1
    `, [email]);
    //  console.log('Elloe')
    if (userdata.rows.length === 0) {
        throw new Error('Invail Credentails!');
    }
    const user = userdata.rows[0];
    const matchPassword = await bcrypt.compare(password, user.password);
    //  console.log(matchPassword);
    if (!matchPassword) {
        throw new Error('Invail Credentails!');
    }
    //Generate JWT
    const jwtPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        is_active: user.is_active
    };
    const acessToken = jwt.sign(jwtPayload, config.secret, { expiresIn: '1d' });
    const refreshToken = jwt.sign(jwtPayload, config.refreshSecret, { expiresIn: '3d' });
    return { acessToken, refreshToken };
};
const generateRefreshToken = async (token) => {
    //  console.log(token)
    if (!token) {
        throw new Error('Unauthorized access!');
    }
    const decode = jwt.verify(token, config.refreshSecret);
    // console.log(decode) // see payload
    const userdata = await pool.query(`
          select * from users where email = $1 
      `, [decode.email]);
    //   console.log(userdata);
    if (userdata.rows.length === 0) {
        throw new Error('User Not Found!');
    }
    const user = userdata.rows[0];
    if (!user?.is_active) {
        throw new Error('Forbidden!');
    }
    const jwtPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        is_active: user.is_active
    };
    const acessToken = jwt.sign(jwtPayload, config.secret, { expiresIn: '1d' });
    return { acessToken };
};
export const authService = {
    loginUserIntoDB,
    generateRefreshToken
};
//# sourceMappingURL=auth.service.js.map