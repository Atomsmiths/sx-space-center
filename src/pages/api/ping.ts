import { Handler } from "../../@types/handler";

const handler: Handler<string> = (_request, response) => {
  response.status(200).json("OK");
};

export default handler;
