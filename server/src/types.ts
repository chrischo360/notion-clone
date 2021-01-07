import { Request, Response } from "express";
import { Redis } from "ioredis";
import { Page } from "./entities/Page";

export type MyContext = {
  req: Request & { session: Express.Session };
  res: Response;
  page: Page;
  redis: Redis;
};
