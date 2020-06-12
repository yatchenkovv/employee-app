import React, { Component } from 'react';
import '../header/header.css';

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-primary">
                <span className="navbar-brand text-brand">Учет сотрудников 1.0</span>
            </nav>
        )
    }
}