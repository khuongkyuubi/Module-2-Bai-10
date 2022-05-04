"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryManager = void 0;
var SalaryManager = /** @class */ (function () {
    function SalaryManager() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }
    Object.defineProperty(SalaryManager.prototype, "head", {
        get: function () {
            return this._head;
        },
        set: function (value) {
            this._head = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SalaryManager.prototype, "tail", {
        get: function () {
            return this._tail;
        },
        set: function (value) {
            this._tail = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SalaryManager.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    SalaryManager.prototype.insertFirst = function (salaryRecord) {
        if (this.size) {
            salaryRecord.next = this.head;
        }
        else {
            this.tail = salaryRecord;
        }
        this.head = salaryRecord;
        this.size++;
    };
    SalaryManager.prototype.insertLast = function (salaryRecord) {
        if (this.size) {
            this.tail.next = salaryRecord;
        }
        else {
            this.head = salaryRecord;
        }
        this.tail = salaryRecord;
        this.size++;
    };
    SalaryManager.prototype.showList = function () {
        var currentList = this.head;
        //@ts-ignore
        console.log("Month".padEnd(15), "Salary (VND)".padEnd(15));
        while (currentList) {
            //@ts-ignore
            console.log(currentList.month.toString().padEnd(15), currentList.salary.toString().padEnd(15));
            currentList = currentList.next;
        }
    };
    SalaryManager.prototype.showSumOfSalary = function () {
        var currentList = this.head;
        var sumOfSalary = 0;
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
    };
    SalaryManager.prototype.findMaxSalary = function () {
        var currentList = this.head;
        var maxSalary = this.head.salary;
        //@ts-ignore
        console.log("Max salary month is");
        //@ts-ignore
        console.log("Month".padEnd(15), "Salary (VND)".padEnd(15));
        while (currentList) {
            if (currentList.salary > maxSalary)
                maxSalary = currentList.salary;
            //@ts-ignore
            currentList = currentList.next;
        }
        //@ts-ignore
        // console.log(currentList.month.toString().padEnd(15),currentList.salary.toString().padEnd(15));
        console.log("Max of salary is: ", maxSalary);
    };
    return SalaryManager;
}());
exports.SalaryManager = SalaryManager;
