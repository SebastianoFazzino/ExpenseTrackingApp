
const expenseList = [
  {
    id: 1,
    title: "Groceries",
    amount: 25.60,
    date: new Date(2021, 10, 12)
  },
  {
    id: 2,
    title: "Cinema",
    amount: 9.99,
    date: new Date(2021, 10, 17)
  },
  {
    id: 3,
    title: "Restaurant",
    amount: 37.00,
    date: new Date(2021, 11, 3)
  },
  {
    id: 4,
    title: "Insurance",
    amount: 26.95,
    date: new Date(2021, 11, 22)
  }
];

const addExpense = (newExpense) => {

  return {...expenseList, newExpense}
}

export { expenseList, addExpense };