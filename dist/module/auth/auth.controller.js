import { authService } from "./auth.service.js";
const loginUser = async (req, res) => {
    try {
        const result = await authService.loginUserIntoDB(req.body);
        //  console.log('Hello')
        const { refreshToken } = result;
        res.cookie("RefreshToken", refreshToken, {
            secure: false, // in production level true
            httpOnly: true,
            sameSite: "lax"
        });
        res.status(200).json({
            "message": "User Login Successfully!",
            "data": result
        });
    }
    catch (error) {
        res.status(500).json({
            success: "Error in login",
            message: error.message,
            error: error
        });
    }
};
const refreshToken = async (req, res) => {
    //  console.log(req.cookies)
    try {
        const result = await authService.generateRefreshToken(req.cookies.RefreshToken);
        res.status(200).json({
            "message": "Access token generate Successfully!",
            "data": result
        });
    }
    catch (error) {
        res.status(500).json({
            success: "Error in login",
            message: error.message,
            error: error
        });
    }
};
export const authController = {
    loginUser,
    refreshToken
};
//# sourceMappingURL=auth.controller.js.map