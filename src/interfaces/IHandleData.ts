export interface IHandleData {
    onSaveChangesEmployee: () => void;
    onSelectedEmployee: (Id: number) => void;
    onUpdateDataEmployees: () => void;
    onDeleteSelectedEmployee: () => void;
    onAddNewEmployee: () => void;
}