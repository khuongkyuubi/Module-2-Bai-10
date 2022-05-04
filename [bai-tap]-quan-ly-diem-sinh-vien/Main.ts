import {ScoresList} from "./ScoresList";
import {ScoreRecord} from "./ScoreRecord";

let scoresList : ScoresList = new ScoresList();

// console.log(scoresList);
// scoresList.showList();
// scoresList.findByName("name");
// scoresList.showList();
// scoresList.showList();
//create new record
const scoreRecord1 = new ScoreRecord("Nguyễn Nam", 9);
const scoreRecord2 = new ScoreRecord("Lê Toàn", 8);
const scoreRecord3 = new ScoreRecord("Phàm Tùng", 4);
const scoreRecord4 = new ScoreRecord("Ngô Thành", 7);
const scoreRecord5 = new ScoreRecord("Trần Long", 9);
const scoreRecord6 = new ScoreRecord("Vũ Sơn", 3);
const scoreRecord7 = new ScoreRecord("Quý Bửu", 4);
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
