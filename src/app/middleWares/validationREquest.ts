import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validedRequest =
  (schema: AnyZodObject) =>
  async (req: Request, re: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });
      return next();
    } catch (err) {
      next(err);
    }
  };

export default validedRequest;
