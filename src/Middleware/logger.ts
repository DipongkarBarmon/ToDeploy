import type { NextFunction, Request, Response } from "express";
import fs from 'fs'

export const logger = (req : Request, res : Response, next : NextFunction) => {
  // console.log(`Method : ${req.method}, Time: ${Date.now()}, URL : ${req.url}`);
  const log =`\nMethod : ${req.method}, Time: ${Date.now()}, URL : ${req.url}\n`
  fs.appendFile('logger.txt',log,(err : any)=>{
    //  console.log(err)
  })
  next();
}