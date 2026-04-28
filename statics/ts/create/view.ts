import { navigationMenu, addObject } from '../view';

export function createView(): void {
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = /*HTML*/ `
    ${navigationMenu()}
        
    <h3>Insert a user</h3>
    ${addObject()}
    <button onclick="pushObject()">Save </button>`;
}

(window as any).createView = createView;
