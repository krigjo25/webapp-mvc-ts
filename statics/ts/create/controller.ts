import { modal, Person } from '../modal';

declare global {
    function updateview(): void;
}

export function pushObject(): void {
    const person: Person = {
        id: modal.people.length + 1,
        name: modal.inputs.create.name,
        email: modal.inputs.create.email
    };
    modal.app.currentpage = 'search';
    modal.people.push(person);
    updateview();
}

(window as any).pushObject = pushObject;
