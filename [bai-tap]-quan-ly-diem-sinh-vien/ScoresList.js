"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoresList = void 0;
var ScoresList = /** @class */ (function () {
    function ScoresList() {
        this._head = null;
        this._tail = null;
        this._size = 0;
        this._currentRecord = this._head;
    }
    Object.defineProperty(ScoresList.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScoresList.prototype, "head", {
        get: function () {
            return this._head;
        },
        set: function (value) {
            this._head = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScoresList.prototype, "tail", {
        get: function () {
            return this._tail;
        },
        set: function (value) {
            this._tail = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScoresList.prototype, "currentRecord", {
        get: function () {
            return this._currentRecord;
        },
        set: function (value) {
            this._currentRecord = value;
        },
        enumerable: false,
        configurable: true
    });
    ScoresList.prototype.insertFirst = function (scoreRecord) {
        if (this.size) {
            scoreRecord.next = this.head; // kết nối node head hiện tại với chính nó
            // this.head = scoreRecord;
        }
        else {
            this.tail = scoreRecord;
        }
        this.head = scoreRecord; // đẩy node hiện tại thành node head
        // }
        this.size++;
    };
    ScoresList.prototype.insertLast = function (scoreRecord) {
        if (this.size) {
            this.tail.next = scoreRecord; // kết nối cái tail hiện tại đến node thêm vào
            // this.tail = scoreRecord; // thay tail bằng chính node thêm vào
        }
        else {
            this.head = scoreRecord;
        }
        this.tail = scoreRecord;
        this.size++;
    };
    ScoresList.prototype.showList = function () {
        this.currentRecord = this.head; //reset this.currentRecord
        if (!this.size) {
            console.log("Scores List is empty!!!");
        }
        else {
            //@ts-ignore
            console.log("Name".padEnd(15), "Score".padEnd(5));
            while (this.currentRecord) {
                //@ts-ignore
                console.log(this.currentRecord.name.padEnd(15), this.currentRecord.score.toString().padEnd(5));
                this.currentRecord = this.currentRecord.next;
            }
        }
    };
    ScoresList.prototype.totalStudentsFail = function () {
        var failedStudents = 0;
        this.currentRecord = this.head; //reset this.currentRecord
        while (this.currentRecord) {
            if (this.currentRecord.score < 5) {
                failedStudents++;
            }
            this.currentRecord = this.currentRecord.next;
        }
        this.currentRecord = this.head; //reset this.currentRecord
        return failedStudents;
    };
    ScoresList.prototype.listStudentMaxScore = function () {
        var maxScore = this.head.score;
        this.currentRecord = this.head; //reset this.currentRecord
        // let listMaxScore :ScoreRecord[] = [];
        console.log("List student(s) has max score");
        //@ts-ignore
        console.log("Name".padEnd(15), "Score".padEnd(5));
        if (!this.size) {
            console.log("Scores List is empty!!!");
        }
        while (this.currentRecord) {
            if (this.currentRecord.score > maxScore) {
                maxScore = this.currentRecord.score;
                //@ts-ignore
            }
            this.currentRecord = this.currentRecord.next;
        }
        this.currentRecord = this.head;
        while (this.currentRecord) {
            if (this.currentRecord.score === maxScore) {
                //@ts-ignore
                console.log(this.currentRecord.name.padEnd(15), this.currentRecord.score.toString().padEnd(5));
            }
            this.currentRecord = this.currentRecord.next;
        }
    };
    ScoresList.prototype.findByName = function (name) {
        this.currentRecord = this.head; //reset this.currentRecord
        console.log("List student(s) has name ", name);
        //@ts-ignore
        console.log("Name".padEnd(15), "Score".padEnd(5));
        if (!this.size) {
            console.log("Scores List is empty!!!");
        }
        while (this.currentRecord) {
            if (this.currentRecord.name === name) {
                //@ts-ignore
                console.log(this.currentRecord.name.padEnd(15), this.currentRecord.score.toString().padEnd(5));
            }
            this.currentRecord = this.currentRecord.next;
        }
    };
    return ScoresList;
}());
exports.ScoresList = ScoresList;
