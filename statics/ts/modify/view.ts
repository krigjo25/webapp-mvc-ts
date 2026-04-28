import { navigationMenu, modifyObject } from '../view';

export function modifyView(): void {
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = /*HTML*/ `
    ${navigationMenu()}
    
    <h3>Modify a user</h3>
    ${modifyObject()}
    <button onclick="modify()">Save</button>
    `;
}

(window as any).modifyView = modifyView;
