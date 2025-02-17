import { HttpException, HttpStatus } from '@nestjs/common';

export class UserException extends HttpException {
  private constructor(message: string, httpStatus: HttpStatus) {
    super(message, httpStatus);
  }

  public static userNotFound(userId: string|number): UserException {
    return new UserException(`User not found: ${userId}`, HttpStatus.NOT_FOUND)
  }

  public static userAlreadyExists(username: string): UserException {
    return new UserException(`User with username ${username} already exists`, HttpStatus.CONFLICT)
  }
}
