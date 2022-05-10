export class Node<T> {
    public data : T;
    next: Node<T> | null = null;
    constructor (data: T) {
        this.data = data;
    }

    readData(): T {
        return this.data;
    }



}