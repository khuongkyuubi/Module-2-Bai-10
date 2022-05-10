import {Node} from "./Node";

export class LinkedList<T> {
    public head: Node<T> | null;
    public tail: Node<T> | null;
    public size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstNode(data: T): void {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    insertLastNode(data: T): void {
        if (!this.head) {
            this.insertFirstNode(data);
        } else {
            let node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    readList(): T[] {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }

        return listData;
    }

    getSize(): number {
        return this.size;
    }

}