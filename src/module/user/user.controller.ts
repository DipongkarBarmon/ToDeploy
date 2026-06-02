import type { Request, Response } from "express"
import { pool } from "../../db/index.js"
import { userServic } from "./user.service.js"


const createUser = async(req : Request , res: Response)=>{
      //  console.log(req.body)
      //const {name ,email,password,age} = req.body

      try{ 
         const result = await userServic.createUserIntoDB(req.body);
        // console.log(result)
        res.status(200).json({
          "message": "User created successfully!",
          "data": result.rows[0]
        })

      }catch(error:any){ 
          res.status(500).json({
          message: error.message,
          error: error
         })
      }
}


const fatchAllUser =  async(req: Request, res: Response)=>{
    // console.log('Controller',req.user)
    try {
        const result = await userServic.fatchAllUserFromDB()
        res.status(200).json({
           success : true,
           message : 'User retrived successfully!',
           data : result.rows
        })
    } catch (error : any) {
       res.status(500).json({
           success : false,
           message : error.message,
           error : error
        })
    }
}

const fatchUserById = async(req:Request,res:Response)=>{
    try {
       const {id} = req.params;
        const result = await  userServic.fatchUserByIdFromDB(id as string);
        // console.log(result)

        if(result.rows.length === 0){
           res.status(404).json({
         success: false,
         message : `User is not found!`,
         data :{}
       })
        }
       res.status(200).json({
         success: true,
         message : "User retrived successfully!",
         data : result.rows[0],
       })
    } catch (error : any) {
        res.status(500).json({
         success: false,
         message : error.message,
         error : error,
       })
    }
}

const updateUserInfo = async(req : Request, res: Response)=>{
    try {
    const {id} = req.params;
    // const {name,password,is_active} =req.body;
    // console.log(id);
    // console.log({name,password,is_active})

    const result = await userServic.updateUserInfoFromDB(id as string,req.body)
   
      if(result.rows.length === 0){
          res.status(404).json({
         success: false,
         message : `User is not found!`,
         data :{}
        })
      }
      
      res.status(200).json({
         success: true,
         message : "User update successfully!",
         data : result.rows[0],
       })

    } catch (error : any) {
       res.status(500).json({
         success: false,
         message : error.message,
         error : error,
       })
    }
}

const deleteUser = async(req : Request, res : Response)=>{
    
    try {
       const {id} = req.params
       
       const result = await userServic.deleteUserInfoFromDB(id as string);

        
        res.status(200).json({
         success: true,
         message : "User delete successfully!",
         data : result.rows[0],
       })

    } catch (error : any) {
       res.status(500).json({
         success: false,
         message : error.message,
         error : error,
       })
    }

}
export const userControler = {
  createUser,
  fatchAllUser,
  fatchUserById,
  updateUserInfo,
  deleteUser

}