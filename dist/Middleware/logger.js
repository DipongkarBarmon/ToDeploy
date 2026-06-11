import fs from 'fs';
export const logger = (req, res, next) => {
    // console.log(`Method : ${req.method}, Time: ${Date.now()}, URL : ${req.url}`);
    const log = `\nMethod : ${req.method}, Time: ${Date.now()}, URL : ${req.url}\n`;
    fs.appendFile('logger.txt', log, (err) => {
        //  console.log(err)
    });
    next();
};
//# sourceMappingURL=logger.js.map