export class TodoList {
    id: number;
    name: string;
    description: string;
    complete: boolean = false;

    constructor(values: Object ={}) {
        Object.assign(this,values);
    }
}
