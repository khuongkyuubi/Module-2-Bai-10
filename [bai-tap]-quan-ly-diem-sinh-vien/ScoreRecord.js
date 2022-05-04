"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreRecord = void 0;
var ScoreRecord = /** @class */ (function () {
    function ScoreRecord(name, score) {
        this._next = null;
        this._name = name;
        this._score = score;
        this._next = null;
    }
    Object.defineProperty(ScoreRecord.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScoreRecord.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this._score = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScoreRecord.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (value) {
            this._next = value;
        },
        enumerable: false,
        configurable: true
    });
    return ScoreRecord;
}());
exports.ScoreRecord = ScoreRecord;
