import {Month, SalaryRecord} from "./SalaryRecord";
import {SalaryManager} from "./SalaryManager"

let salary1 = new SalaryRecord(Month.JAN, 5000000);
let salary2 = new SalaryRecord(Month.FEB, 6000000);
let salary3 = new SalaryRecord(Month.MAR, 7000000);
let salary4 = new SalaryRecord(Month.APR, 8000000);
let salary5 = new SalaryRecord(Month.MAR, 9000000);
let salary6 = new SalaryRecord(Month.JUN, 10000000);
let salary7 = new SalaryRecord(Month.JUL, 11000000);
let salary8 = new SalaryRecord(Month.AUG, 12000000);
let salary9 = new SalaryRecord(Month.SEP, 13000000);
let salary10 = new SalaryRecord(Month.OCT, 14000000);
let salary11 = new SalaryRecord(Month.NOV, 15000000);
let salary12 = new SalaryRecord(Month.DEP, 16000000);

let salaryManager = new SalaryManager();

salaryManager.insertLast(salary1);
salaryManager.insertLast(salary2);
salaryManager.insertLast(salary3);
salaryManager.insertLast(salary4);
salaryManager.insertLast(salary5);
salaryManager.insertLast(salary6);
salaryManager.insertLast(salary7);
salaryManager.insertLast(salary8);
salaryManager.insertLast(salary9);
salaryManager.insertLast(salary10);
salaryManager.insertLast(salary11);
salaryManager.insertLast(salary12);

console.log(salaryManager);
salaryManager.showList();
salaryManager.showSumOfSalary();
salaryManager.findMaxSalary();