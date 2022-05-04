export class ScoreRecord {
    private _name: string;
    private _score: number;
    private _next : ScoreRecord | null = null;

    constructor(name: string, score: number) {
        this._name = name;
        this._score = score;
        this._next = null;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }

    get next(): ScoreRecord {
        return this._next;
    }

    set next(value: ScoreRecord) {
        this._next = value;
    }
}