import { Request, Response } from "express";
import * as Result from '../../../common/services/result'

export function index(req: Request, res: Response) {
    try {
        const data = {
            endpoints: [],
        }
        const result = Result.okWithData(data, 'Services using locatel data')
        res.status(result.code).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}