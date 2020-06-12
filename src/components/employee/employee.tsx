import React, { Component } from 'react';
import { IEmployeeItemProps } from '../../interfaces/IEmployeeItemProps';

export class EmployeeItem extends Component<IEmployeeItemProps> {
    constructor(props: IEmployeeItemProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <li key={this.props.employee.Id}
                className={`list-group-item ${this.props.employee.Id === this.props.selectedEmployeeId ? 'selected-employee' : ''}`}
                onClick={() => {
                    return (this.props).onSelectedEmployee(this.props.employee.Id)}
                }>{this.props.employee.fullName}
            </li>
        )
    }
}
