import { IEmployee } from "./IEmployee";

export interface IEmployeeItemProps {
    employee: IEmployee;
    onSelectedEmployee: (id: number) => void;
    selectedEmployeeId: number;
}