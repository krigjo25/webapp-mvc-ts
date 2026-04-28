import { modal, Person } from './modal';

declare global {
    function updateview(): void;
}

export function navigationMenu(): string {
    return /*HTML*/`
    <button onclick="modal.app.currentpage='search'; updateview()">Search</button>
    <button onclick="modal.app.currentpage='create';updateview()"> Push a new person</button>
    <button onclick="modal.app.currentpage='confirm';updateview()"> Remove a person </button>
    `;
}

export function findObject(id: number | null, arrays: Person[]): Person | null {
    /* Finds an object in a object*/
    if (id === null) return null;
    for (let array of arrays) {
        if (id == array.id) return array;
    }
    return null;
}

export function findIndex(id: number): number | undefined {
    for (let i = 0; i < modal.people.length; i++) {
        if (modal.people[i].id == id) return i;
    }
    return undefined;
}

export function getObjects(label: string, label1: string): string {
    const id = modal.inputs.confirm.id;
    const object = findObject(id, modal.people);
    if (!object) return '';
    return /*HTML*/ `
        <dl>
            <dt>${label}</dt>
            <dd>${object.name}</dd>
            <dt>${label1}</dt>
            <dd>${object.email}</dd>    
        </dl>`;
}

export function modifyObject(): string {
    return /*HTML*/ `
        Name
        <input type="text" value= "${modal.inputs.modify.name}" 
        oninput="modal.inputs.modify.name = this.value">
        email
        <input type="text" value= "${modal.inputs.modify.email}" oninput="modal.inputs.modify.email = this.value">`;
}

export function addObject(): string {
    return /*HTML*/ `
        Name
        <input type="text" 
        oninput="modal.inputs.create.name = this.value">
        email
        <input type="text" oninput="modal.inputs.create.email = this.value">`;
}

// Make functions globally available for inline event handlers
(window as any).navigationMenu = navigationMenu;
(window as any).findObject = findObject;
(window as any).findIndex = findIndex;
(window as any).getObjects = getObjects;
(window as any).modifyObject = modifyObject;
(window as any).addObject = addObject;
