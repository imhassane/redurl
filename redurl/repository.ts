// @ts-ignore
import {ModelType} from "./model";

export default interface Repository {
    connect(): void;
    find(code: string): any;
    store(model: ModelType): any;
}