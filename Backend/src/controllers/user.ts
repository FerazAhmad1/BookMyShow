import { type Request, type Response, type NextFunction } from "express";
import userModal from "../models/users"
import jwt, { SignOptions } from "jsonwebtoken"
import type { StringValue } from "ms";

const signIn = (_id: string) => {
    const secret = process.env.SECRET || "abc"
    const expiresIn = (process.env.EXPIRES_IN || "90d") as StringValue
    const option: SignOptions = {
        expiresIn: expiresIn
    }
    const token = jwt.sign(
        { _id },
        secret,
        option
    );

    return token

}
export const createUser = async (req: Request, res: Response) => {
    try {

        const user = await userModal.create(req.body) as any
        user.password = undefined
        const token = signIn(user._id.toString())
        res.status(201).json({ code: 1, token, user, message: "success" })
    } catch (error: any) {
        if (error.errorResponse?.code == 11000) {
            const keysObj = error.errorResponse.keyPattern;
            let k = ""
            for (const key in keysObj) {
                k = k + " " + key
            }
            return res.status(400).json({
                code: 0,
                key: k.trim(),
                message: `${k} already exist with us`,

            })
        }
        return res.status(500).json({
            code: 0,
            key: `${error.errors.name.properties.path}`,
            message: error.message
        })
    }


}

export const loginHandler = async (req: Request, res: Response) => {
    try {
        const { email = null, password = null } = req.body;
        if (email == null || password == null) {
            return res.status(400).json({
                code: 0,
                message: "please send both email and password"
            })
        }
        const user = await userModal.findOne({ email }).select("+password")
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({
                code: 0,
                message: "Unauthorized user",
                key: "password"
            })
        }

        const token = signIn(user._id.toString());
        (user as any).password = undefined
        res.status(200).json({
            code: 1,
            token, user,
            message: "success"
        })

    } catch (error) {
        const e = error as any
        res.status(500).json({
            code: 0,
            message: e.message || "Something went wrong"
        })
    }
}


export const authorizer = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({
                message: "Unauthorized user"
            })
        }
        if (!req.headers.authorization.startsWith("Bearer")) {
            return res.status(401).json({
                message: "Unauthorized user"
            })
        }
        const token = req.headers.authorization.split(" ")[1]
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized user"
            })
        }
        if (!process.env.SECRET) {
            throw {
                message: "secret does not found"
            }
        }
        const valid = jwt.verify(token, process.env.SECRET);
        if (!valid) {
            return res.status(401).json({
                message: "Unauthorized user"
            })
        }
        const { _id } = jwt.decode(token) as any
        const user = userModal.findById(_id);
        (req as any).user = user


        next()
    } catch (error) {
        const e = error as any
        res.status(500).json({
            message: e.message
        })
    }
}