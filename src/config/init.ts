import { NextFunction, Response, Request } from "express";

const config = {
  cors: async (req: Request, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
      "Access-Control-Allow-Headers", "*"
      // "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Pere-Token, X-ClientID, X-Tim-Token, X-Rum-Token, X-EntityID, X-EntityGroupID"
      );
      if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        next();
      }
      next();
  }
}

export default config;