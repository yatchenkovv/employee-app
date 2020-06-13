import { domService } from './domService';
import { Context } from 'vm';

export const  appService = (() => {
    return {
        _isDisabledSaveBtn: true,
        getStatusSaveBtn() {
            return this._isDisabledSaveBtn;
        },
        clearEmployeeCardFields() {
            setTimeout(() => {
                domService.getElement('fullName').clearField();
                domService.getElement('position').clearField();
                domService.getElement('famle').clearField();
                domService.getElement('woman').clearField();
                domService.getElement('fired').clearField();
            }, 0);
        },
        enableButtonsStatusCheck(_this: Context) {
            let masterValueFullName = '';
            let masterValuePosition = '';
            let masterValueDateOfBirth = ''
            let masterValueFired = '';
            let masterValueGender = '';
            let hasEditableEmployee = false;
            
            // registering master values
            domService.getElement('ul.container-list').on('selected-employee', (() => {
                this._isDisabledSaveBtn = true;
                _this.setState({
                    isDisabledSaveBtn: true
                });
                setTimeout(() => {
                    hasEditableEmployee = true;
                    masterValueFullName = (domService.getValue('fullName') as string).trim();
                    masterValuePosition = (domService.getValue('position') as string);
                    masterValueDateOfBirth = (domService.getValue(".react-datepicker__input-container > input") as string);
                    masterValueFired = (domService.getValue('fired') as string);
                    let _gender = '';
                    if (domService.getValue('famle')) {
                      _gender = 'Муж';
                    }
                    if (domService.getValue('woman')) {
                      _gender = 'Жен';
                    }
                    masterValueGender = _gender;
                }, 0)
            }).bind(_this));

            // handlers registering
            domService.getElement('fullName').on('keyup', () => {
                if (hasEditableEmployee === true) {
                    if (masterValueFullName !== domService.getValue('fullName')) {
                        this._isDisabledSaveBtn = false;
                        _this.setState({
                            isDisabledSaveBtn: false
                        });
                    }
                }
            });
            domService.getElement('position').on('change', () => {
                if (hasEditableEmployee === true) {
                    if (masterValuePosition !== domService.getValue('position')) {
                        this._isDisabledSaveBtn = false;
                        _this.setState({
                            isDisabledSaveBtn: false
                        });
                    }
                }
            });
            domService.getElement('.react-datepicker__input-container > input').on('blur', () => {
                if (hasEditableEmployee === true) {
                    if (masterValueDateOfBirth !== domService.getValue('.react-datepicker__input-container > input')) {
                        this._isDisabledSaveBtn = false;
                        _this.setState({
                            isDisabledSaveBtn: false
                        });
                    }
                }
            });
            domService.getElement('famle').on('change', () => {
                if (hasEditableEmployee === true) {
                    if (masterValueGender !== domService.getValue('famle')) {
                        this._isDisabledSaveBtn = false;
                        _this.setState({
                            isDisabledSaveBtn: false
                        });
                    }
                }
            });
            domService.getElement('woman').on('change', () => {
                if (hasEditableEmployee === true) {
                    if (masterValueGender !== domService.getValue('woman')) {
                        this._isDisabledSaveBtn = false;
                        _this.setState({
                            isDisabledSaveBtn: false
                        });
                    }
                }
            });
            domService.getElement('fired').on('change', () => {
                if (hasEditableEmployee === true) {
                    if (masterValueFired !== domService.getValue('fired')) {
                        this._isDisabledSaveBtn = false;
                        _this.setState({
                            isDisabledSaveBtn: false
                        });
                    }
                }
            });
        }
    }
})();