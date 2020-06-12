import { IEmployee } from '../interfaces/IEmployee';

export const StorageService = (() => {
    return {
        initDB() {
            localStorage.setItem('employees', JSON.stringify([{
                Id: 100,
                fullName: 'Озерков Николай Петрович',
                position: 'Ведущий инженер теплотехник',
                dateOfBirth: new Date('10.23.1985'),
                gender: 'Муж',
                isFired: false
            },
            {
                Id: 200,
                fullName: 'Морев Семен Николаевич',
                position: 'Начальник отдела теплотехники',
                dateOfBirth: new Date('09.23.1988'),
                gender: 'Муж',
                isFired: true
            },
            {
                Id: 300,
                fullName: 'Лесов Владимир Петрович',
                position: 'Кладовщик',
                dateOfBirth: new Date('10.23.1998'),
                gender: 'Муж',
                isFired: false
            }]))
        },
        getData(): IEmployee[] {
            const employees: IEmployee[] = JSON.parse((localStorage.getItem('employees') as string));
            return employees;
        },
        saveData(employees: IEmployee[]) {
            localStorage.setItem('employees', JSON.stringify(employees));
        },
        getSequenceId(employees: IEmployee[]): number {
            let maxId = 0;
            if (Math.max.apply(Math, (employees || []).map((empl) => empl.Id)) !== Number.NEGATIVE_INFINITY) {
                maxId = Math.max.apply(Math, (employees).map((empl) => empl.Id));
            }
            return maxId + 100;
        },
  }
})()