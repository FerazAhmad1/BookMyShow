import Theater from "../models/theater";
import { Request, Response } from "express";

import Hall from "../models/hall"
import mongoose, { startSession } from "mongoose";

export const listTheater = async (req: Request, res: Response) => {
    try {
        let list = []
        const user = (req as any).user
        if (user.roles.includes("admin")) {
            list = await Theater.find()
        } else {
            list = await Theater.find({ ownerId: user._id })
        }
        return res.status(200).json({
            data: list
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        })
    }
}


export const createTheater = async (req: Request, res: Response) => {
    try {
        const response = await Theater.create(req.body);
        res.status(200).json({
            data: response,
            message: "theater created succesfully"
        })
    } catch (error) {
        res.status(200).json({
            message: "Server error"
        })
    }
}

export const updateTheater = async (req: Request, res: Response) => {
    try {
        const _id = req.params.id
        const body = req.body
        const response = await Theater.findByIdAndUpdate(_id, { ...body }, { new: true });
        res.status(200).json({

            data: response,
            message: "Updated successfully"
        })

    } catch (error) {
        const e = error as any
        res.status(500).json({
            message: e.message
        })
    }
}

export const deleteTheater = async (req: Request, res: Response) => {
    const session = await startSession()
    try {

        const id = req.params.id;
        const [thResponse, hResponse] = await Promise.all([Theater.findByIdAndDelete(id, { session }), Hall.deleteMany({ theaterId: id }, { session })]);
        if (!thResponse) {
            throw {
                message: "Theater not found"
            }
        }
        await session.commitTransaction();
        res.status(200).json({
            message: "deleted successfully"
        })
    } catch (error) {
        session.abortTransaction()
        res.status(500).json({
            message: "Server error"
        })
    } finally {
        session.endSession()
    }
}