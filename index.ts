// @ts-ignore
import express, {Request, Response} from "express";
import * as env from "dotenv";

import { API } from "./startup";
import HttpHandler from "./http";
import logger from "./logger";

env.config();

const server = express();
server.use(express.json());

// Initialisation of the main logic.
const api = new API();

// Initialisation of the http requests handler.
const httpHandler = new HttpHandler(api.getService);

server.get('/:code', async (req: Request, res: Response) => {
    return await httpHandler.handleGet(req, res);
});

server.post('', async (req: Request, res: Response) => {
    return await httpHandler.handlePost(req, res);
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    logger.info(`Server running at port: ${PORT}`);
});
