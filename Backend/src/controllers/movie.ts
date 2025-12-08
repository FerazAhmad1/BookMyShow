import { type Request, type Response } from "express"
import Movie from "../models/movie";

export const createMovie = async (req: Request, res: Response) => {
    try {
        const { title = null, duration = null, poster = null, languages = null, subtitle = null } = req.body
        const data = { title, duration, poster, languages, subtitle, active: false };
        const movie = await Movie.create(data);
        res.status(200).json({
            data: movie
        })
    } catch (error) {
        const e = error as any;
        res.status(500).json({
            message: e.message || "SERVER ERROR"
        })
    }
}


export const getMovie = async (req: Request, res: Response) => {
    try {
        const response = await Movie.find();
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


export const updateMovie = async (req: Request, res: Response) => {
    try {
        const { title = null, duration = null, poster = null, languages = null, subtitle = null } = req.body;
        const data = { title, duration, poster, languages, subtitle, active: false };
        const _id = req.params.id;
        const update = await Movie.findByIdAndUpdate(_id, { ...data }, { new: true, runValidators: true });
        res.status(200).json({
            data: update,
            message: "Updated Successfully"
        })
    } catch (error) {
        const e = error as any
        res.status(500).json({
            message: e.message || "SERVER ERROR"
        })
    }
};

export const deleteMovie = async (req: Request, res: Response) => {
    try {
        const _id = req.params.id;
        const deleteResponse = await Movie.findByIdAndDelete(_id);
        if (!deleteResponse) {
            return res.status(404).json({
                message: "movie not found"
            })
        }
        return res.status(200).json({
            message: "movie deleted successfully"
        })
    } catch (error) {
        const e = error as any;
        return res.status(500).json({
            message: e.message
        })
    }
}

