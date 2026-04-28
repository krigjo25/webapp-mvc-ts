import { modal } from '../modal';
import { findIndex } from '../view';

declare global {
    function updateview(): void;
}

export function confirm_deletion(): void {
    if (modal.inputs.confirm.confirmation && modal.inputs.confirm.id !== null) {
        const index = findIndex(modal.inputs.confirm.id);
        if (index !== undefined) {
            modal.people.splice(index, 1);
        }
    }

    modal.app.currentpage = 'search';
    updateview();
}

(window as any).confirm_deletion = confirm_deletion;
