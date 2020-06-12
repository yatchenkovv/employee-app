import { StorageService } from '../services/storageService';
import { employeeService } from '../services/employeeService';
import { IEmployee } from '../interfaces/IEmployee';
import { IAction } from '../interfaces/IAction';

const tempEmloyee: IEmployee = {
    Id: 0,
    fullName: ' ',
    position: '',
    dateOfBirth: new Date(),
    gender: '',
    isFired: false,
} 
export const initialState = {
    selectedEmployee: tempEmloyee,
    employees: StorageService.getData(),
}


export function rootReducer(state = initialState, action: IAction) {
    switch(action.type) {
        case 'SELECTED_EMPLOYEE':
            const employee = state.employees.find((empl: IEmployee) => empl.Id === action.payload.Id);
            const newState = Object.assign({}, state, {
                selectedEmployee: employee
            });
            return newState;
        case 'SAVE_CHANGES':
            return {
                ...state
            }
        case 'UPDATE_DATA_EMPLOYEES':
            if (!employeeService.hasChangeEmployee(state.employees)) {
                if (window.confirm('Внимание! все внесенные изменения будут потеряны')) {
                return employeeService.updateEmployees(state);
                }
            } else {
                return employeeService.updateEmployees(state);
            }
        case 'DELETE_SELECTED_EMPLOYEE':
            const _employees = state.employees.filter((empl) => empl.Id !== state.selectedEmployee.Id);
            state.selectedEmployee = tempEmloyee;
            StorageService.saveData(_employees);
            state.employees = _employees;
            return {
                ...state    
            }
        case 'ADD_NEW_EMPLOYEE':
            action.payload.newEmployee.Id = StorageService.getSequenceId(state.employees);
            const newEmployeeCollection = (state.employees || []).concat(action.payload.newEmployee);
            StorageService.saveData(newEmployeeCollection);
            return Object.assign({selectedEmployee: action.payload.newEmployee}, {employees: newEmployeeCollection});
        
        default: return state;
    }

}