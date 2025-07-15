import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends Error {
  constructor(message) {
    super(message);

    this.name = 'NotFound';
    this.isExternal = true;
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export class BadRequestError extends Error {
  constructor(message) {
    super(message);

    this.name = 'BadRequest';
    this.isExternal = true;
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);

    this.name = 'Unauthenticated';
    this.isExternal = true;
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);

    this.name = 'Unauthorized';
    this.isExternal = true;
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
