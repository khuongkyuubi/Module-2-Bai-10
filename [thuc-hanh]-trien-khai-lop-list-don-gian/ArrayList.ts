import {IArrayList} from "./IArrayList";

export class ArrayList<T> implements IArrayList<T> {
    container: T[]; //Array<T>

    constructor() {
        this.container = [];
    }

    add(data: T): void {
        this.container.push(data)
    }

    get(index: number): T {
        return this.container[index] || null;
    }

    remove(index: number): void {
        this.container.splice(index, 0);
    }

    size(): number {
        return this.container.length;
    }
}