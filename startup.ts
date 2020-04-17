import Mongo from "./repository/mongo";
import MongoService from "./service/MongoService";
import Repository from "./redurl/repository";
import Service from "./redurl/service";
import logger from "./logger";

export class API {
    protected repository: Repository;
    protected service: Service;

    constructor() {

        // Creating a new mongo repository.
        this.repository = new Mongo(process.env.DATABASE_URL || "", { useNewUrlParser: true, useUnifiedTopology: true });

        // Creating a service.
        this.service = new MongoService(this.repository);

        try {
            this.repository.connect();
            logger.info("Succesfully connected to the database");
        } catch(ex) {
            logger.error(ex);
        }
    }

    get getService() {
        return this.service;
    }
}