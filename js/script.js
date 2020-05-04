'use strict';
let money, time;

function start() {
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
  time = prompt("Ведите дату в формате YYYY-MM-DD", '');
}
start();

let appData = {
  budget: money,
  TimeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце?", '');
    let b = prompt("Во сколько обойдется?", '');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
      a != '' && b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
    } else {}
  }
}
chooseExpenses();

function chooseOptExpenses() {
  for (let i = 1; i < 4; i++) {
    let a1 = prompt("Статья необязательных расходов?", '');
    if ((typeof (a1)) === 'string' && (typeof (a1)) != null != null &&
      a1 != '' && a1.length < 50) {
      appData.optionalExpenses[i] = a1;
    } else {}
  }
}
// chooseOptExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed(2);
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}
detectLevel();

function checkSaving() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?");
    let percent = +prompt("Под какой процент?");
    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}
checkSaving();