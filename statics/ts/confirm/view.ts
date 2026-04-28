import { navigationMenu, getObjects } from '../view';

export function confirmView(): void {
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = /*HTML*/`
        ${navigationMenu()}
        <h1> Confirm deletion </h1>
        ${getObjects('Name', 'Email')}
        <input type="checkbox" oninput="modal.inputs.confirm.confirmation = this.checked"> Are you sure you'd like to go this path?
        <button onclick="confirm_deletion()">Confirm deletion</button>
        `;
}

(window as any).confirmView = confirmView;
