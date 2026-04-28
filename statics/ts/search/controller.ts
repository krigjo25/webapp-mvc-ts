import { modal } from '../modal';
import { findObject } from '../view';

declare global {
    function updateview(): void;
}

export function confirmDeletion(id: number): void {
    modal.app.currentpage = 'confirm';
    modal.inputs.confirm.id = id;
    updateview();
}

export function prepareobject(id: number): void {
    modal.app.currentpage = 'modify';
    const object = findObject(id, modal.people);
    if (object) {
        modal.inputs.modify.name = object.name;
        modal.inputs.modify.email = object.email;
        modal.inputs.modify.id = id;
    }
    updateview();
}

(window as any).confirmDeletion = confirmDeletion;
(window as any).prepareobject = prepareobject;
