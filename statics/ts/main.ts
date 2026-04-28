import { modal } from './modal';
import './view';
import './confirm/controller';
import './confirm/view';
import './create/controller';
import './create/view';
import './modify/controller';
import './modify/view';
import './search/controller';
import './search/view';

declare global {
    interface Window {
        updateview: () => void;
        searchView: () => void;
        createView: () => void;
        confirmView: () => void;
        modifyView: () => void;
    }
}

export function updateview(): void {
    const page = modal.app.currentpage;
    if (page == "search") {
        window.searchView();
    } else if (page == "create") {
        window.createView();
    } else if (page == "confirm") {
        window.confirmView();
    } else if (page == 'modify') {
        window.modifyView();
    }
}

window.updateview = updateview;

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    updateview();
});
