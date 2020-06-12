
import * as React from 'react';
import { connect } from 'react-redux';

// css
import '../src/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// components
import { Header } from './components/header/header';
import { EmployeeCard } from './components/employeeCard/employeeCard'; 
import { Toolbar } from './components/toolbar/toolbar';

// interfaces
import { ISateStore } from './interfaces/IStateStore';
import { IHandleData } from './interfaces/IHandleData';
import { IDispatchCustom } from './interfaces/IDispatchCustom';
import { EmployeesList } from './components/employees/employees.list';

export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid full-width">
        <Header />
            <div className="box-container">
                <div className="row">
                  <div className="col-xs-6">
                    <EmployeesList employees={(this.props as ISateStore).employees}
                                   selectedEmployee={(this.props as ISateStore).selectedEmployee}
                                   onSelectedEmployee={(this.props as IHandleData).onSelectedEmployee}/>
                  </div>
                  <div className="col-xs-6 content-card">
                    <EmployeeCard employee={(this.props as ISateStore).selectedEmployee}/>
                 </div>
              </div>
            </div>
          <Toolbar  save={(this.props as IHandleData).onSaveChangesEmployee}
                    update={(this.props as IHandleData).onUpdateDataEmployees}
                    delete={(this.props as IHandleData).onDeleteSelectedEmployee}
                    add={() => {
                      return (this.props as IHandleData).onAddNewEmployee()}
                    } 
                    hasSelected={(this.props as ISateStore).selectedEmployee.Id !== 0} />
      </div>
    );
  }
}

const mapStateToProps = (state: ISateStore) => {
    return {
        employees: state.employees,
        selectedEmployee: state.selectedEmployee || { Id: 0 }
    }
}

const mapDispatchToProps = (dispatch: React.Dispatch<IDispatchCustom>) => {
  return {
    onSelectedEmployee: (id: number) => dispatch({ type: 'SELECTED_EMPLOYEE', payload: { Id: id } }),
    onSaveChangesEmployee: () => dispatch({ type: 'SAVE_CHANGES' }),
    onUpdateDataEmployees: () => dispatch({ type: 'UPDATE_DATA_EMPLOYEES' }),
    onDeleteSelectedEmployee: () => dispatch({ type: 'DELETE_SELECTED_EMPLOYEE' }),
    onAddNewEmployee: () => {
      const _fullName = (document.getElementsByName('fullName')[0] as HTMLInputElement).value;
      const _position = (document.getElementsByName('position')[0] as HTMLSelectElement).value;
      const _dateOfBirth = (document.querySelector(".react-datepicker__input-container > input") as HTMLInputElement).value;
      const _isFired = (document.getElementsByName('fired')[0] as HTMLInputElement).checked;
      let _gender = '';
      if ((document.getElementsByName('genderradioM')[0] as HTMLInputElement).checked === true) {
        _gender = 'Муж';
      }
      if ((document.getElementsByName('genderradioW')[0] as HTMLInputElement).checked === true) {
        _gender = 'Жен';
      }

      const _newEployee = {
        Id: 0,
        fullName: _fullName,
        position: _position,
        dateOfBirth: _dateOfBirth,
        gender: _gender,
        isFired: _isFired,
      }
      return dispatch({ type: 'ADD_NEW_EMPLOYEE', payload: { newEmployee: _newEployee  } });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);