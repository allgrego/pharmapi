import { Request, Response } from "express";
import { getProviders } from "../services/general";
import * as Result from "../services/result";

export function index(req: Request, res: Response) {
    try {
        // To tell the user if there is auth or not
        const authType = Boolean(process.env.META_API_KEY || null) ? 'apikey' : 'none'

        const providers = getProviders().map((provider) => provider.name)

        const resultData = {
            message: `Venezuelan pharmacies API service`,
            version: process.env.APP_VERSION || 1,
            providers,
            exampleEndpoints: [
                `/v1/availability/farmatodo`,
            ],
            documentation: process.env.DOCUMENTATION_URL || 'not available',
            authType
        }

        const result = Result.okWithData(resultData)

        res.status(result.code).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

export function v1Index(req: Request, res: Response) {
    try {
        const data = {
            baseEndpoints: getProviders().map((provider) => `/v1/${provider.id}`),
        }
        const result = Result.okWithData(data, 'This is index of version 1')        
        res.status(result.code).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

export function notFound(req: Request, res: Response) {
    try {
        const result = Result.notFound()
        res.status(result.code).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}