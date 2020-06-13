import React, { Component } from 'react';
import { IToolbarProps } from '../../interfaces/IToolbarProps';
import { appService } from '../../services/appService';
import { store } from '../../store/configureStore';
import { domService } from '../../services/domService';

export class Toolbar extends Component<IToolbarProps> {
    constructor(props: IToolbarProps) {
        super(props);

        this.state = {
            isDisabledSaveBtn: true
        }
    }

    private unsubscribeStore: Function = () => {}

    componentDidMount() {
        this.unsubscribeStore = store.subscribe(() => {
            if (store.getState().selectedEmployee.Id !== 0) {
                domService.getElement('ul.container-list').click();
            }
        });
        appService.enableButtonsStatusCheck(this);
    }

    componentWillUnmount() {
        this.unsubscribeStore();
    }

    render() {
        return (
            <nav className="navbar fixed-bottom navbar-light bg-primary toolbar">
                <div className="m-position-5">
                    <button disabled={appService.getStatusSaveBtn()} onClick={this.props.save} className="btn btn-light">Сохранить изменения</button>
                    <button onClick={this.props.update} className="btn btn-light">Обновить данные</button>
                    <button disabled={!this.props.hasSelected} onClick={this.props.delete} className="btn btn-light">Удалить выбранного сотрудника</button>
                    <button onClick={this.props.add} className="btn btn-light">Добавить нового сотрудника</button>
                </div>
            </nav>
        )
    }
}