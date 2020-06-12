import { IPayload } from '../interfaces/IPayload';

export interface IAction {
    payload: IPayload;
    type: string;
}