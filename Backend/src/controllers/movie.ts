import { type Request, type Response } from "express"
import Movie from "../models/movie";
import { STATUS_CODES } from "http";

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
        const queryObj = { ...req.query }
        const exludeField = ["page", "sort", "limit", "fields"];
        exludeField.forEach((key) => delete queryObj[key]);
        // Build the query
        let query = Movie.find(queryObj);
        // sorting 
        if (req.query.sort) {
            const sortBy = (req.query.sort as string).split(",").join(" ")

            query = query.sort(sortBy)
        } else {
            query = query.sort('-createdAt')
        }
        // project the field 
        if (req.query.fields) {
            const fields = (req.query.fields as string).split(",").join(" ")
            query = query.select(fields)
        } else {
            query = query.select("-__v")
        }
        const page = (req.query.page as any) * 1 || 1
        const limit = (req.query.limit as any) * 1 || 100
        const skip = (page - 1) * limit
        query = query.skip(skip).limit(limit)
        // resove the query

        if (req.query.page) {
            const count = await Movie.countDocuments()
            if (skip >= count) {
                throw {
                    status: 404,
                    message: "page does not exist"
                }
            }
        }
        const response = await query;
        return res.status(200).json({
            data: response,
            message: "success"
        })

    } catch (error) {
        const e = error as any;
        return res.status(e.status || 500).json({
            message: e.message || "SERVER ERROR"
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

