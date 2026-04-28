export interface Person {
    id: number;
    name: string;
    email: string;
}

export interface Modal {
    app: {
        currentpage: string;
    };
    inputs: {
        search: {
            text: string;
        };
        create: {
            name: string;
            email: string;
        };
        confirm: {
            id: number | null;
            confirmation: boolean;
        };
        modify: {
            id: number | null;
            name: string;
            email: string;
        };
    };
    people: Person[];
}

export const modal: Modal = {
    //  Application state
    app: {
        currentpage: "search", // Create delete, update
    },

    //  Page inputs
    inputs: {
        search: {
            text: "",
        },
        create: {
            name: "",
            email: "",
        },
        confirm: {
            id: null,
            confirmation: false,
        },
        modify: {
            id: null,
            name: "",
            email: "",
        }
    },

    // Data
    people: [
        { id: 1, name: "Jhon Doe", email: "JhonDoe@demo.com" },
        { id: 2, name: "Jhon Doe", email: "JhonDoe@demo.com" }
    ],
};

// Make it globally available for the old scripts if needed
(window as any).modal = modal;
