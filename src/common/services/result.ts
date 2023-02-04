import { ClientError, Result, ServerError, Success } from "../types/result.types";


export function resultResponse<T>(code: number, message: string, data?: T): Result {
    try {
        if (data) {
            // To validate it's valid for json
            const jsonData = JSON.stringify(data)
        }
        return {
            code,
            message,
            data
        }
    } catch (error) {
        console.error(error);
        return {
            code: ServerError.INTERNAL_SERVER_ERROR,
            message: "INTERNAL ERROR",
            data
        }
    }
}

export function invalidParameters(message?: string): Result {
    return resultResponse(ClientError.BAD_REQUEST, message || 'Bad request. Missing data.');
}

export function created<T = unknown>(data: T, message?: string): Result<T> {
    return resultResponse(Success.CREATED, message || 'Created succesfully.', data);
}

export function ok(message?: string): Result {
    return resultResponse(Success.OK, message || 'Request executed succesfully.');
}

export function okWithData<T>(data: T, message?: string): Result<T> {
    return resultResponse(Success.OK, message || 'Request executed succesfully', data)
}

export function error(error?: unknown): Result {
    return resultResponse(ServerError.INTERNAL_SERVER_ERROR, String(error || 'Internal error'))
}

export function notFound(message?: string): Result {
    return resultResponse(ClientError.NOT_FOUND, message || 'Not found')
}

export function forbidden(message?: string): Result {
    return resultResponse(ClientError.FORBIDDEN, message || 'Forbidden')
}

