export const domService = (() => {
    return {
        getValue(selector: string) {
            return (document.getElementsByName(selector)[0] as HTMLInputElement)?.checked ||
                    (document.getElementsByName(selector)[0] as HTMLInputElement)?.value ||
                    (document.querySelector(selector) as HTMLInputElement)?.value;

        }
    }
})();