import { modal, Person } from '../modal';
import { navigationMenu } from '../view';

declare global {
    function updateview(): void;
}

export function searchView(): void {
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = /*HTML*/`
    ${navigationMenu()}
    <h1> Search </h1>
    
    <input type="text" oninput="modal.inputs.search.text=this.value" value="${modal.inputs.search.text || ''}">
    <button onclick="updateview()">Search</button>
        
    <div>
    Søkeresultater : 
    <ul>
        ${tableView()}
    </ul>
    </div>
    `;
}

export function tableView(): string {
    let html = ``;
    let people = modal.people;
    const search = modal.inputs.search.text;

    if (modal.inputs.search.text != "") {
        people = filter(search, people);
    }
    
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        html += /*HTML*/` 
        <li>
            ${person.name} 
            ${person.email}
            <button onclick="prepareobject(${person.id})">Modify user</button>
            <button onclick="confirmDeletion(${person.id})">X</button>
        </li>
        `;
    }
    return html;
}

export function filter(search: string, arrays: Person[]): Person[] {
    const results: Person[] = [];
    search = search.toLowerCase();

    for (let array of arrays) {
        const name = array.name.toLowerCase();
        const email = array.email.toLowerCase();

        if (name.indexOf(search) != -1 || email.indexOf(search) != -1)
           results.push(array); 
    }
    return results;
}

(window as any).searchView = searchView;
(window as any).tableView = tableView;
(window as any).filter = filter;
