import React, { Component } from 'react';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';
import { IEmployeeCardProps } from '../../interfaces/IEmployeeCardProps';
import { IEmployee } from '../../interfaces/IEmployee';

export class EmployeeCard extends Component<IEmployeeCardProps> {
    constructor(props: IEmployeeCardProps) {
        super(props);

        this.handleChangeFullName = this.handleChangeFullName.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangePosition = this.handleChangePosition.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeFired = this.handleChangeFired.bind(this);
    }

    public handleChangeFullName(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            hasChangedControl: true,
            selectedEmployee: Object.assign(this.props.employee, { fullName:  event.target.value })
        });
    }

    public handleChangeDate = (date: Date) => {
        this.setState({
          selectedEmployee: Object.assign(this.props.employee, { dateOfBirth: date })
        });
    }

    public handleChangePosition = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            selectedEmployee: Object.assign(this.props.employee, { position:  event.target.value })
        });
    }

    public handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            selectedEmployee: Object.assign(this.props.employee, { gender:  event.target.value })
        });
    }

    public handleChangeFired = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            selectedEmployee: Object.assign(this.props.employee, { isFired:  event.target.checked })
        });
    }

    public getUTCDate = (date = new Date()) => { 
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000)
    }


    render() {
        const tempEmloyee: IEmployee = {
            Id: 0,
            fullName: ' ',
            position: '',
            dateOfBirth: new Date(),
            gender: '',
            isFired: false,
        } 
        const employee  = this.props.employee ? this.props.employee : tempEmloyee;
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h3>Карточка сотрудника</h3>
                    <hr />
                    <div className="box-container">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label>ФИО</label>
                                    <input type="text"
                                            name="fullName"
                                            className="form-control"
                                            value={employee.fullName}
                                            onChange={this.handleChangeFullName}/>
                                </div>
                                <div className="form-group">
                                    <label>Должность</label>
                                    <select name="position" className="form-control" value={employee.position} onChange={this.handleChangePosition}>
                                        <option>__________</option>
                                        <option>Ведущий инженер теплотехник</option>
                                        <option>Начальник отдела теплотехники</option>
                                        <option>Кладовщик</option>
                                        <option>Водитель</option>
                                        <option>Экспедитор</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xs-6 m-position-20">
                                <div className="form-group">
                                    <label>Дата рождения</label>
                                    <div className="form-control">
                                        <DatePicker
                                            name="date"
                                            selected={this.getUTCDate(employee.dateOfBirth)}
                                            onChange={this.handleChangeDate}   
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Пол</label>
                                    <div className="radio">
                                        <label className="radio-inline">
                                            Муж &nbsp;
                                            <input type="radio"
                                                    name="famle"
                                                    value='Муж'
                                                    checked={employee.gender === 'Муж'}
                                                    onChange={this.handleChangeGender} />
                                        </label>
                                            &nbsp;&nbsp;&nbsp;
                                        <label className="radio-inline">
                                            Жен &nbsp;
                                            <input type="radio"
                                                    name="woman"
                                                    value='Жен'
                                                    checked={employee.gender === 'Жен'}
                                                    onChange={this.handleChangeGender}/>
                                        </label>
                                            &nbsp;
                                        <span className="alert alert-info"> Уволен
                                            &nbsp;<input type="checkbox"
                                                        name="fired"
                                                        checked={employee.isFired}
                                                        onChange={this.handleChangeFired}/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}