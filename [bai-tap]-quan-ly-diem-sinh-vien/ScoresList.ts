import {ScoreRecord} from "./ScoreRecord";

export class ScoresList {
    private _head: ScoreRecord | null;
    private _tail: ScoreRecord | null;
    private _currentRecord: ScoreRecord;
    private _size: number;

    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
        this._currentRecord = this._head;
    }

    set size(value: number) {
        this._size = value;
    }

    set head(value: ScoreRecord | null) {
        this._head = value;
    }

    set tail(value: ScoreRecord | null) {
        this._tail = value;
    }

    get head(): ScoreRecord | null {
        return this._head;
    }

    get tail(): ScoreRecord | null {
        return this._tail;
    }

    get size(): number {
        return this._size;
    }


    get currentRecord(): ScoreRecord {
        return this._currentRecord;
    }

    set currentRecord(value: ScoreRecord) {
        this._currentRecord = value;
    }

    insertFirst(scoreRecord: ScoreRecord): void {
        if (this.size) {
            scoreRecord.next = this.head; // kết nối node head hiện tại với chính nó
            // this.head = scoreRecord;
        } else {
            this.tail = scoreRecord;
        }
        this.head = scoreRecord; // đẩy node hiện tại thành node head
        // }
        this.size++;
    }

    insertLast(scoreRecord: ScoreRecord): void {
        if (this.size) {
            this.tail.next = scoreRecord; // kết nối cái tail hiện tại đến node thêm vào
            // this.tail = scoreRecord; // thay tail bằng chính node thêm vào
        } else {
            this.head = scoreRecord;
        }
        this.tail = scoreRecord;
        this.size++;

    }

    showList(): void {
        this.currentRecord = this.head; //reset this.currentRecord
        if (!this.size) {
            console.log("Scores List is empty!!!");
        } else {
            //@ts-ignore
            console.log("Name".padEnd(15), "Score".padEnd(5));
            while (this.currentRecord) {
                //@ts-ignore
                console.log(this.currentRecord.name.padEnd(15), this.currentRecord.score.toString().padEnd(5))
                this.currentRecord = this.currentRecord.next
            }
        }
    }

    totalStudentsFail(): number {
        let failedStudents = 0;
        this.currentRecord = this.head; //reset this.currentRecord
        while (this.currentRecord) {
            if (this.currentRecord.score < 5) {
                failedStudents++;
            }
            this.currentRecord = this.currentRecord.next
        }
        this.currentRecord = this.head; //reset this.currentRecord
        return failedStudents;
    }

    listStudentMaxScore(): void {
        let maxScore = this.head.score;
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
            this.currentRecord = this.currentRecord.next
        }
        this.currentRecord = this.head;
        while (this.currentRecord) {
            if (this.currentRecord.score === maxScore) {
                //@ts-ignore

                console.log(this.currentRecord.name.padEnd(15), this.currentRecord.score.toString().padEnd(5))

            }
            this.currentRecord = this.currentRecord.next
        }


    }

    findByName(name: string): void {
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

                console.log(this.currentRecord.name.padEnd(15), this.currentRecord.score.toString().padEnd(5))
            }
            this.currentRecord = this.currentRecord.next
        }

    }

}