import { type Request, type Response } from "express";
import Shows from "../models/shows"
import APIFEATURE from "./getQueryHandlerClass.ts/ApiFeatures";

export const createShows = async (req: Request, res: Response) => {
    try {
        const { hallId = null, movieId = null, timings = null } = req.body;
        const data = { hallId, movieId, timings }
        const response = await Shows.create(data);
        return res.status(200).json({
            data: response
        })
    } catch (error) {
        const e = error as any;
        return res.status(200).json({
            message: e.message || "SERVER ERROR"
        })
    }
}


export const getShow = async (req: Request, res: Response) => {
    try {
        const ApiFeatures = new APIFEATURE(Shows.find(), req.query)
        const query = ApiFeatures.filter().limitFields().sort().pagination().query
        const response = await query.populate("movie", "hall", "theater")

        if (!response) {
            return res.status(404).json({
                message: "No sound found"
            })
        }

        return res.status(200).json({
            data: response,
            message: "success"
        })


    } catch (error) {
        const e = error as any;
        return res.status(500).json({
            message: e.message
        })
    }
}

export const updateShow = async (req: Request, res: Response) => {
    try {
        const _id = req.params.id;
        const { hallId = null, movieId = null, timings = null } = req.body;
        const data = { hallId, movieId, timings }
        const update = await Shows.findByIdAndUpdate(_id, { ...data }, { new: true, runValidators: true });
        if (!update) {
            res.status(200).json({
                message: "shows not found"
            })
        }
        return res.status(200).json({
            message: "show updated succesfully"
        })
    } catch (error) {
        const e = error as any;
        return res.status(500).json({
            message: e.message || "SERVER ERROR"
        })
    }
}

export const getShowWithId = async (req: Request, res: Response) => {
    try {
        const _id = req.params.id;
        const response = Shows.findById(_id).populate("movie", "theater");
        if (!response) {
            res.status(404).json({
                message: "show not Found"
            })
        }
        res.status(200).json({
            data: response,
            message: "success"
        })
    } catch (error) {
        const e = error as any
        res.status(500).json({
            message: e.message || "SERVER ERROR"
        })
    }
}

export const deleteShow = async (req: Request, res: Response) => {
    try {
        const _id = req.params.id;
        const response = await Shows.findByIdAndUpdate(_id, { $set: { active: false } }, { new: true, runValidators: true });
        if (!response) {
            return res.status(404).json({
                message: "show not found"
            })
        }
        return res.status(200).json({
            data: response,
            message: "deleted successfully"
        })
    } catch (error) {

        const e = error as any;
        res.status(500).json({

            message: e.message || "SERVER ERROR"
        })
    }
}