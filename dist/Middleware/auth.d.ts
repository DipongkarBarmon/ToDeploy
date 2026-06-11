import type { NextFunction, Request, Response } from "express";
import type { Role } from "../tyoes/index.js";
declare const auth: (...roles: Role[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default auth;
//# sourceMappingURL=auth.d.ts.map