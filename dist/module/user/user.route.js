import { Router } from "express";
import { userControler } from "./user.controller.js";
import auth from "../../Middleware/auth.js";
import { userRole } from "../../tyoes/index.js";
const router = Router();
router.post('/', userControler.createUser);
router.get('/', auth(userRole.admin, userRole.agent), userControler.fatchAllUser);
router.get('/:id', userControler.fatchUserById);
router.put('/:id', userControler.updateUserInfo);
router.delete('/:id', userControler.deleteUser);
export const userRouter = router;
//# sourceMappingURL=user.route.js.map