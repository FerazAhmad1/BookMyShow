import { type Query } from "mongoose";
class APIFEATURE<T> {
    public query: Query<T[], T>;
    public queryString: any
    constructor(query: Query<T[], T>, queryString: any) {
        this.query = query;
        this.queryString = queryString
    }

    filter() {

        let queryObj = { ...this.queryString }
        const exludeField = ["page", "sort", "limit", "fields"];
        exludeField.forEach((key) => delete queryObj[key]);
        queryObj = JSON.stringify(queryObj)
        queryObj = queryObj.replace(/\b(gte|lte|gt|lt)\b/g, (match: string) => `$${match}`);
        queryObj = JSON.parse(queryObj)
        this.query = this.query.find(queryObj)
        return this
    };

    sort() {
        if (this.queryString.sort) {
            const sortBy = (this.queryString.sort as string).split(",").join(" ")

            this.query = this.query.sort(sortBy)
        } else {
            this.query = this.query.sort('-createdAt')
        }
        return this
    }
    limitFields() {
        if (this.queryString.fields) {
            const fields = (this.queryString.fields as string).split(",").join(" ")
            this.query = this.query.select(fields)
        } else {
            this.query = this.query.select("-__v")
        }
        return this
    }
    pagination() {
        const page = (this.queryString.page as any) * 1 || 1
        const limit = (this.queryString.limit as any) * 1 || 100
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this

    }
}
export default APIFEATURE