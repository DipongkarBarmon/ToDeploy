export declare const authService: {
    loginUserIntoDB: (payload: {
        email: string;
        password: string;
    }) => Promise<{
        acessToken: string;
        refreshToken: string;
    }>;
    generateRefreshToken: (token: string) => Promise<{
        acessToken: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map