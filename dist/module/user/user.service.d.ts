import type { IUser } from "./user.interface.js";
export declare const userServic: {
    createUserIntoDB: (payload: IUser) => Promise<import("pg").QueryResult<any>>;
    fatchAllUserFromDB: () => Promise<import("pg").QueryResult<any>>;
    fatchUserByIdFromDB: (id: string) => Promise<import("pg").QueryResult<any>>;
    updateUserInfoFromDB: (id: string, payload: IUser) => Promise<import("pg").QueryResult<any>>;
    deleteUserInfoFromDB: (id: string) => Promise<import("pg").QueryResult<any>>;
};
//# sourceMappingURL=user.service.d.ts.map