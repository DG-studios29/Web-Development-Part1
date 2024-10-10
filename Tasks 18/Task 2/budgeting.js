// Create income object
function Income(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
}

// Create expense object
function Expense(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;
}

// Initialize arrays for incomes and expenses
const incomes = [];
const expenses = [];

// Hardcoded income objects
const income1 = new Income("Salary", 4000, true);
const income2 = new Income("Freelance Work", 1000, true);
const income3 = new Income("Investments", 500, true);
const income4 = new Income("Rental Income", 700, true);
const income5 = new Income("Gift", 200, false);

incomes.push(income1, income2, income3, income4, income5);

// Hardcoded expense objects
const expense1 = new Expense("Groceries", 350, true);
const expense2 = new Expense("Rent", 1000, true);
const expense3 = new Expense("Utilities", 200, true);
const expense4 = new Expense("Entertainment", 150, false);
const expense5 = new Expense("Transportation", 100, true);

expenses.push(expense1, expense2, expense3, expense4, expense5);

// Add income entry
function addIncome() {
  // Display existing incomes for reference
  let existingIncomes = "Existing Incomes:\n";
  for (let i = 0; i < incomes.length; i++) {
    existingIncomes += `${i + 1}. ${incomes[i].name}\n`;
  }
  const name = prompt(existingIncomes + "Enter income name:");
  const amount = parseFloat(prompt("Enter income amount:"));
  const recurring = confirm("Is it a recurring income?");
  
  const income = new Income(name, amount, recurring);
  incomes.push(income);
  
  displayIncomes();
}

// Add expense entry
function addExpense() {
  // Display existing expenses for reference
  let existingExpenses = "Existing Expenses:\n";
  for (let i = 0; i < expenses.length; i++) {
    existingExpenses += `${i + 1}. ${expenses[i].name}\n`;
  }
  const name = prompt(existingExpenses + "Enter expense name:");
  const amount = parseFloat(prompt("Enter expense amount:"));
  const recurring = confirm("Is it a recurring expense?");
  
  const expense = new Expense(name, amount, recurring);
  expenses.push(expense);
  
  displayExpenses();
}

// Display incomes
function displayIncomes() {
  let incomeList = "<h2>Income</h2><ul>";

  for (let i = 0; i < incomes.length; i++) {
    const income = incomes[i];
    incomeList += "<li>" + income.name + ": $" + income.amount.toFixed(2);

    if (income.recurring) {
      incomeList += " (Recurring)";
    }

    incomeList += "</li>";
  }

  incomeList += "</ul>";

  // Update the incomes element in the HTML
  document.getElementById("incomes").innerHTML = incomeList;
}

// Display expenses
function displayExpenses() {
  let expenseList = "<h2>Expenses</h2><ul>";

  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    expenseList += "<li>" + expense.name + ": $" + expense.amount.toFixed(2);

    if (expense.recurring) {
      expenseList += " (Recurring)";
    }

    expenseList += "</li>";
  }

  expenseList += "</ul>";

  // Update the expenses element in the HTML
  document.getElementById("expenses").innerHTML = expenseList;
}

// Calculate disposable income
function calculateDisposableIncome() {
  let totalIncome = 0;
  let totalExpenses = 0;

  for (let i = 0; i < incomes.length; i++) {
    totalIncome += incomes[i].amount;
  }

  for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i].amount;
  }

  const disposableIncome = totalIncome - totalExpenses;

  return disposableIncome;
}

// Calculate savings
function calculateSavings() {
  const disposableIncome = calculateDisposableIncome();
  const savingsPercentage = parseFloat(prompt("Enter the percentage of disposable income you want to save:"));
  const savingsAmount = (disposableIncome * savingsPercentage) / 100;

  return savingsAmount;
}

// Display results
function displayResults() {
  const disposableIncome = calculateDisposableIncome();
  const savingsAmount = calculateSavings();
  const remainingIncome = disposableIncome - savingsAmount;

  let resultHTML = "<h2>Results</h2>";
  resultHTML += "<p>Disposable Income: $" + disposableIncome.toFixed(2) + "</p>";
  resultHTML += "<p>Savings: $" + savingsAmount.toFixed(2) + "</p>";
  resultHTML += "<p>Remaining Income: $" + remainingIncome.toFixed(2) + "</p>";

  // Update the results element in the HTML
  document.getElementById("results").innerHTML = resultHTML;
}

// Display initial incomes, expenses, and results
displayIncomes();
displayExpenses();
displayResults();