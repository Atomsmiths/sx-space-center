import { NextApiRequest, NextApiResponse } from "next";

type Handler<T> = (
  _request: NextApiRequest,
  _response: NextApiResponse<T>,
) => void;

export type { Handler };
