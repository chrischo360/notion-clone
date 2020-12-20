import { Request, Response } from "express";
import { Page } from "./entities/Page";

export type MyContext = {
  req: Request;
  res: Response;
  page: Page;
};
