class customError extends Error{
    constructor(
        statusCode,
        message="Something went wrong, please check",
        errors = [],
    ){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.data = null;
        this.success = false;
        this.errors = errors;
    }
}

export default customError;