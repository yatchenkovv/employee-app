import { ICustomEventType } from '../interfaces/ICustomEventType'

export const domService = (() => {
    const customEvents: ICustomEventType = {
        'selected-employee': 'click',
    }
    return {
        getValue(selector: string) {
            return (document.getElementsByName(selector)[0] as HTMLInputElement)?.checked ||
                    (document.getElementsByName(selector)[0] as HTMLInputElement)?.value ||
                    (document.querySelector(selector) as HTMLInputElement)?.value;

        },
        getElement(selector: string) {
            const element = (document.getElementsByName(selector)[0] as HTMLInputElement) ||
                            document.querySelector(selector);

            return {
                on(eventKey: string, listener: () => void) {
                    element.addEventListener( (customEvents)[eventKey] || eventKey, listener);
                },
                clearField() {
                    if ('value' in element) {
                        element.value = ' ';
                    }
                    if ('checked' in element) {
                        element.checked = false;
                    }
                },
                click() {
                    element.click();
                }
            }
        }
    }
})();