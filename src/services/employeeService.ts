import {StorageService} from './storageService';
import { IEmployee } from '../interfaces/IEmployee';
import { ISateStore } from '../interfaces/IStateStore';

export const employeeService = (() => {
    return {
        hasChangeEmployee(employees: IEmployee[]) {
            const employeesFromDB = StorageService.getData()
            return employeesFromDB.every((employeeDB) => {
                const tempEmloyee = employees.find((empl) => empl.Id === employeeDB.Id);
                return (tempEmloyee?.dateOfBirth === employeeDB.dateOfBirth) &&
                        (tempEmloyee.fullName === employeeDB.fullName) &&
                        (tempEmloyee.gender === employeeDB.gender) &&
                        (tempEmloyee.isFired === employeeDB.isFired) &&
                        (tempEmloyee.position === employeeDB.position);
            })
        },

        updateEmployees(state: ISateStore) {
            return {
                ...state,
                employees: StorageService.getData()
            }
        }
    }
})(); 