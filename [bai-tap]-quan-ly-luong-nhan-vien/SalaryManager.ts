import {SalaryRecord} from "./SalaryRecord";

export class SalaryManager {
    private _head: SalaryRecord | null;
    private _tail: SalaryRecord | null;
    private _size: number;

    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;

    }

    get head(): SalaryRecord | null {
        return this._head;
    }

    set head(value: SalaryRecord | null) {
        this._head = value;
    }

    get tail(): SalaryRecord | null {
        return this._tail;
    }

    set tail(value: SalaryRecord | null) {
        this._tail = value;
    }

    get size(): number {
        return this._size;
    }

    set size(value: number) {
        this._size = value;
    }


    insertFirst(salaryRecord: SalaryRecord): void {
        if (this.size) {
            salaryRecord.next = this.head;
        } else {
            this.tail = salaryRecord;
        }
        this.head = salaryRecord;
        this.size++;
    }

    insertLast(salaryRecord: SalaryRecord): void {
        if (this.size) {
            this.tail.next = salaryRecord;
        } else {
            this.head = salaryRecord;
        }
        this.tail = salaryRecord;
        this.size++;
    }


    showList(): void {
        let currentList = this.head;
        //@ts-ignore
        console.log("Month".padEnd(15), "Salary (VND)".padEnd(15));
        while (currentList) {
            //@ts-ignore
            console.log(currentList.month.toString().padEnd(15), currentList.salary.toString().padEnd(15));
            currentList = currentList.next;
        }
    }

    showSumOfSalary(): void {
        let currentList = this.head;
        let sumOfSalary = 0;
        //@ts-ignore
        console.log("Month".padEnd(15), "Salary (VND)".padEnd(15));
        while (currentList) {
            sumOfSalary += currentList.salary;
            //@ts-ignore
            console.log(currentList.month.toString().padEnd(15), currentList.salary.toString().padEnd(15));
            currentList = currentList.next;
        }
        //@ts-ignore
        console.log("Sum of salary is: ", sumOfSalary);
    }

    findMaxSalary(): void {
        let currentList = this.head;
        let maxSalary = this.head.salary;
        //@ts-ignore
        console.log("Max salary month is");
        //@ts-ignore
        console.log("Month".padEnd(15), "Salary (VND)".padEnd(15));
        while (currentList) {
            if (currentList.salary > maxSalary) maxSalary = currentList.salary;
            //@ts-ignore
            currentList = currentList.next;
        }
        //@ts-ignore
        // console.log(currentList.month.toString().padEnd(15),currentList.salary.toString().padEnd(15));
        console.log("Max of salary is: ", maxSalary);
    }


}