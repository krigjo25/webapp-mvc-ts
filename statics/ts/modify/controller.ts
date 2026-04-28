import { modal } from '../modal';
import { findObject } from '../view';

declare global {
    function updateview(): void;
}

export function modify(): void {
    const object = findObject(modal.inputs.modify.id, modal.people);
    if (object) {
        object.name = modal.inputs.modify.name;
        object.email = modal.inputs.modify.email;
    }
    modal.app.currentpage = 'search';
    updateview();
}

(window as any).modify = modify;
