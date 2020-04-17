import Mongoose from "mongoose";
import {Model, ModelType} from "../redurl/model";
import Repository from "../redurl/repository";

export default class Mongo implements Repository {
    protected url: string;
    protected configs: any;

    constructor(url: string, configs: any) {
        this.url = url;
        this.configs = configs;
    }

    async connect() {
        const client = await Mongoose.connect(this.url, this.configs);
        return client;
    }

    async find(code: string) {
        const data = await Model.findOne({ code });
        return data;
    }

    async store(model: ModelType) {
        let data = new Model(model);
        data = await data.save();
        return data;
    }


}