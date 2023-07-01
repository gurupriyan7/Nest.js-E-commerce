import { HttpStatus } from "@nestjs/common";
import { Response } from "express";

interface CommonResponseType<T> {
  data: T;
  status: number;
}

interface ErrorResponseType {
  res: Response;
  error: Error;
  statusCode?: HttpStatus;
}

class ResponseUtils {
  public success<T>(
    resp: Response,
    { data, status = HttpStatus.OK }: CommonResponseType<T>,
  ): Response<CommonResponseType<T>> {
    return resp.status(status).send({ data });
  }

  public error({ res, error, statusCode }: ErrorResponseType) {
    return res
      .status(statusCode || HttpStatus.BAD_REQUEST)
      .send({ message: error.message });
  }
}

export default new ResponseUtils();
