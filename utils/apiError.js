// this class is responsible about operation errors (errors that i can predict)
class ApiError extends Error {
    constructor(message, statuscode) {
        super(message)
        this.statusCode = statuscode
        this.status = `${statuscode}`.startsWith('4') ? 'fail' : 'error'
        this.isOperational = true
    }
}
export default ApiError

// 200 
// 500
// 400