"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryRecord = exports.Month = void 0;
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
    Month[Month["JUN"] = 6] = "JUN";
    Month[Month["JUL"] = 7] = "JUL";
    Month[Month["AUG"] = 8] = "AUG";
    Month[Month["SEP"] = 9] = "SEP";
    Month[Month["OCT"] = 10] = "OCT";
    Month[Month["NOV"] = 11] = "NOV";
    Month[Month["DEP"] = 12] = "DEP";
})(Month = exports.Month || (exports.Month = {}));
var SalaryRecord = /** @class */ (function () {
    function SalaryRecord(month, salary) {
        this._month = month;
        this._salary = salary;
        this._next = null;
    }
    Object.defineProperty(SalaryRecord.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (value) {
            this._month = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SalaryRecord.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SalaryRecord.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (value) {
            this._next = value;
        },
        enumerable: false,
        configurable: true
    });
    return SalaryRecord;
}());
exports.SalaryRecord = SalaryRecord;
