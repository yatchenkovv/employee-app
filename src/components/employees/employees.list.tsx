import React, { Component } from 'react';
import { IEmployee } from '../../interfaces/IEmployee';
import { EmployeeItem } from '../employee/employee';
import { store } from '../../store/configureStore';

interface IProps {
    employees: IEmployee[],
    selectedEmployee: IEmployee,
    onSelectedEmployee: (id: number) => void;
}

export class EmployeesList extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    private unsubscribeStore: Function = () => {};
    private updatetStateFromStore() {
        const state = store.getState();
        this.setState({
            ...state
        });
    }

    componentDidMount() {
        this.unsubscribeStore = store.subscribe(() => this.updatetStateFromStore());
    }

    componentWillUnmount() {
        this.unsubscribeStore();
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h3>Список сотрудников</h3>
                    <hr />
                    <ul className="container-list container">
                        {              
                            (this.props.employees || []).map((employee) => {
                                return <EmployeeItem key={employee.Id} 
                                                     employee={employee}
                                                     onSelectedEmployee={this.props.onSelectedEmployee}
                                                     selectedEmployeeId={this.props.selectedEmployee.Id}/>
                            })          
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

