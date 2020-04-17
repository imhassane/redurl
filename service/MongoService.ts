import Service from "../redurl/service";
import Repository from "../redurl/repository";
import { generate } from "randomstring";

export default class MongoService implements Service {
    repository: Repository;

    constructor(repository: Repository) {
        this.repository = repository;
    }

    async find(code: string): Promise<any> {
        return await this.repository.find(code);
    }

    async store(model: { url: string }): Promise<any> {
        const data = {
            url: model.url,
            code: generate(7),
            created_at: new Date().toLocaleTimeString()
        };
        return await this.repository.store(data);
    }

}