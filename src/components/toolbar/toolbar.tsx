import React, { Component } from 'react';
import { IToolbarProps } from '../../interfaces/IToolbarProps';
import { store } from '../../store/configureStore';

export class Toolbar extends Component<IToolbarProps> {
    constructor(props: IToolbarProps) {
        super(props);
    }

    private unsubscribeStore: Function = () => {}

    componentDidMount() {
        document.getElementsByName('fullName')[0].addEventListener('keyup', () => {
            console.log("change log fullname");
        })
    }

    componentWillUnmount() {
        this.unsubscribeStore();
    }

    render() {
        return (
            <nav className="navbar fixed-bottom navbar-light bg-primary toolbar">
                <div className="m-position-5">
                    <button onClick={this.props.save} className="btn btn-light">Сохранить изменения</button>
                    <button onClick={this.props.update} className="btn btn-light">Обновить данные</button>
                    <button disabled={!this.props.hasSelected} onClick={this.props.delete} className="btn btn-light">Удалить выбранного сотрудника</button>
                    <button onClick={this.props.add} className="btn btn-light">Добавить нового сотрудника</button>
                </div>
            </nav>
        )
    }
}