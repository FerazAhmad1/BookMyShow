import Hall from "../models/hall";
import { type Request, type Response } from "express";

export const createHall = async (req: Request, res: Response) => {
    try {
        const response = await Hall.create(req.body);
        res.status(201).json({
            data: response,
            message: "created hall successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        })
    }
}

export const getHallForTheater = async (req: Request, res: Response) => {
    try {
        const theaterId = req.body.theaterId
        const response = await Hall.find({ theaterId })
        if (!response) {
            res.status(404).json({
                message: "Theater not found"
            })
        }
        return res.status(200).json({
            data: response,
            message: "success"
        })
    } catch (error) {
        const e = error as any
        res.status(500).json({
            message: e.message
        })
    }
}

export const updateHall = async (req: Request, res: Response) => {
    try {
        const hallId = req.params.id
        const { theaterId = null, ...rest } = req.body.theaterId;
        if (!theaterId) {
            res.status(400).json({
                message: "Please provide valid theaterId"
            })
        }
        const response = await Hall.findById(hallId);
        if (!response) {
            return res.status(404).json({
                message: "Hall not found"
            })
        }

        if (response.theaterId !== theaterId) {
            return res.status(400).json({
                message: "Unautorized"
            })
        }
        const updateResponse = await Hall.findByIdAndUpdate(hallId, { ...rest }, { new: true, runValidators: true });
        if (!updateResponse) {
            return res.status(200).json({
                message: ""
            })
        }

        return res.status(200).json({
            data: response
        })

    } catch (error) {
        const e = error as any
        res.status(500).json({
            message: e.message || "SERVER ERROR"
        })
    }
}

export const deleteHall = async (req: Request, res: Response) => {
    try {
        const hallId = req.body.id;
        const { theaterId = null } = req.body;

        if (!theaterId) {
            res.status(400).json({
                message: "Please provide valid theaterId"
            })
        }
        const response = await Hall.findById(hallId);
        if (!response) {
            return res.status(404).json({
                message: "Hall not found"
            })
        }

        if (response.theaterId !== theaterId) {
            return res.status(400).json({
                message: "Unautorized"
            })
        }
        const deleteResponse = Hall.findByIdAndDelete(hallId);
        if (!deleteResponse) {
            return res.status(404).json({
                message: "Hall Not found"
            })
        }

        return res.status(200).json({
            message: "Hall deleted sussecfully"
        })

    } catch (error) {
        const e = error as any
        res.status(500).json({
            message: e.message
        })
    }
}

export const getOneHall = async (req: Request, res: Response) => {
    try {
        const _id = req.params.id;
        const hall = await Hall.findById(_id);

        if (!hall) {
            return res.status(404).json({
                message: "Hall not Found"
            })
        }
        return res.status(200).json({
            data: hall,
            message: "success"
        })
    } catch (error) {
        const e = error as any;
        return res.status(500).json({

            message: "SRVER ERROR"
        })
    }
}




