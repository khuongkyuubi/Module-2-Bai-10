"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScoresList_1 = require("./ScoresList");
var ScoreRecord_1 = require("./ScoreRecord");
var scoresList = new ScoresList_1.ScoresList();
// console.log(scoresList);
// scoresList.showList();
// scoresList.findByName("name");
// scoresList.showList();
// scoresList.showList();
//create new record
var scoreRecord1 = new ScoreRecord_1.ScoreRecord("Nguyễn Nam", 9);
var scoreRecord2 = new ScoreRecord_1.ScoreRecord("Lê Toàn", 8);
var scoreRecord3 = new ScoreRecord_1.ScoreRecord("Phàm Tùng", 4);
var scoreRecord4 = new ScoreRecord_1.ScoreRecord("Ngô Thành", 7);
var scoreRecord5 = new ScoreRecord_1.ScoreRecord("Trần Long", 9);
var scoreRecord6 = new ScoreRecord_1.ScoreRecord("Vũ Sơn", 3);
var scoreRecord7 = new ScoreRecord_1.ScoreRecord("Quý Bửu", 4);
scoresList.insertFirst(scoreRecord1);
scoresList.insertFirst(scoreRecord2);
scoresList.insertFirst(scoreRecord3);
scoresList.insertLast(scoreRecord4);
// scoresList.insertLast(scoreRecord5);
// scoresList.insertLast(scoreRecord6)
// console.log(scoresList);
scoresList.showList();
// console.log(scoresList.totalStudentsFail());
// scoresList.listStudentMaxScore();
// scoresList.findByName("Vũ Sơn");
