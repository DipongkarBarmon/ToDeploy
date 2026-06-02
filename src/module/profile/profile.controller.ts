import type { Request, Response } from "express";
import { profileService } from "./profile.service.js";

const createProfile = async(req: Request,res : Response ) =>{
    try {
       
      const result = await profileService.createProfileIntoDB(req.body);
      if(result.rowCount === 0){
          res.status(404).json({
         success: false,
         message : `Profile is not found!`,
         data : {}
        })
      }
      res.status(200).json({
          "message": "Profile created successfully!",
          "data": result.rows[0]
        })

    } catch (error : any) {
       res.status(500).json({
         success: false,
         message : error.message,
         error : error,
       })
    }
}


export const profileController = {
   createProfile
}