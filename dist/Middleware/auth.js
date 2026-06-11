import jwt, {} from 'jsonwebtoken';
import config from "../config/index.js";
import { pool } from "../db/index.js";
const auth = (...roles) => {
    return async (req, res, next) => {
        // console.log("This is protected!")
        // console.log(req.headers)   
        // console.log(req.headers.authorization)
        // console.log(roles)
        try {
            const token = req.headers.authorization;
            if (!token) {
                res.status(401).json({
                    success: false,
                    message: 'Unauthorized access!!'
                });
            }
            const decode = jwt.verify(token, config.secret);
            // console.log(decode) // see payload
            const userdata = await pool.query(`
          select * from users where email = $1 
      `, [decode.email]);
            //   console.log(userdata);
            if (userdata.rows.length === 0) {
                res.status(404).json({
                    success: false,
                    message: 'User Not Found!'
                });
            }
            const user = userdata.rows[0];
            if (!user?.is_active) {
                res.status(403).json({
                    success: false,
                    message: 'Forbidden!'
                });
            }
            if (roles.length && !roles.includes(user.role)) {
                res.status(403).json({
                    success: false,
                    message: 'Forbidden! This role have no access!'
                });
            }
            req.user = decode;
            next();
        }
        catch (error) {
            //   if(error instanceof jwt.JsonWebTokenError){
            //     return res.status(401).json({
            //     success: false,
            //     message: "Invalid token",
            //     });
            //   }
            //   if(error instanceof jwt.TokenExpiredError){
            //       return res.status(401).json({
            //       success: false,
            //       message: "Token expired",
            //     });
            //   }
            next(error);
        }
    };
};
export default auth;
//# sourceMappingURL=auth.js.map