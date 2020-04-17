import Repository from "./repository";

export default interface Service {
    repository: Repository;

    find(code: string): any;
    store(model: { url: string }): any;
}