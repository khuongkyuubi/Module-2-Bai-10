export enum Month{
    JAN = 1,
    FEB,
    MAR,
    APR,
    MAY,
    JUN,
    JUL,
    AUG,
    SEP,
    OCT,
    NOV,
    DEP
}
export class SalaryRecord {
    private _month: Month;
    private _salary : number;
    private _next: SalaryRecord;

    constructor(month: Month, salary: number) {
        this._month = month;
        this._salary = salary;
        this._next = null;
    }

    get month(): Month {
        return this._month;
    }

    set month(value: Month) {
        this._month = value;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        this._salary = value;
    }

    get next(): SalaryRecord {
        return this._next;
    }

    set next(value: SalaryRecord) {
        this._next = value;
    }


}