import { type Request, type Response } from "express";
import userModal from "../models/users"
export const createUser = async (req: Request, res: Response) => {
    try {

        const user = await userModal.create(req.body)
        res.status(201).json(user)
    } catch (error: any) {
        if (error.errorResponse?.code == 11000) {
            const keysObj = error.errorResponse.keyPattern;
            let k = ""
            for (const key in keysObj) {
                k = k + " " + key
            }
            return res.status(400).json({
                message: `${k} already exist with us`,

            })
        }
        return res.status(500).json({
            error,
            message: error.message
        })
    }


}