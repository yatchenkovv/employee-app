import { IEmployee } from "./IEmployee";

export interface ISateStore {
    selectedEmployee: IEmployee;
    employees: IEmployee[];
}