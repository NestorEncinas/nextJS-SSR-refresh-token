import { Response } from "express";

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie("gid", token, {
    httpOnly: true
    /**
     * We want the cookie to work on both domains
     * website - www.example.com
     * api - api.example.com
     */
    // domain: ".example.com"
    // path: "/refresh_token"
  });
};
