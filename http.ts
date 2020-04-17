import {Request, Response} from "express";
import Service from "./redurl/service";

export default class HttpHandler {
    protected service: Service;

    constructor(service: Service) {
        this.service = service;
    }

    async handleGet(req: Request, res: Response) {
        const { code } = req.params;
        if(!code) {
            return res.status(400).send("The code is not correct");
        }

        const data = await this.service.find(code);
        return res.json(data);
    }

    async handlePost(req: Request, res: Response) {
        const { url } = req.body;
        if(!url || url.length < 5) {
            return res.status(400).send("The url is not valid");
        }

        const data = await this.service.store({ url });
        return res.json(data);
    }
}