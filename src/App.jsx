/** @format */
import React, { useState, useEffect } from 'react';
import AddExpense from './components/AddExpense';
import Balance from './components/Balance';
import From from './components/From';
import classes from './App.module.css';

const getData = function () {
  const data = localStorage.getItem('expenses');

  if (data) {
    return JSON.parse(localStorage.getItem('expenses'));
  } else {
    return [];
  }
};

function App() {
  const [formData, setFormData] = useState(getData());
  const [showExpenseBox, setShowExpenseBox] = useState(true);
  const [filtervalue, setFiltedValue] = useState('all');
  const [filterdata, setFilterData] = useState(getData());

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(formData));
    if (filtervalue === 'all') {
      console.log(formData.filter((el) => Number(el.date.split('-')[1]) > -1));
      setFilterData(
        formData.filter((el) => Number(el.date.split('-')[1]) > -1)
      );
    }
  }, [formData]);

  const onFilterVlaueSelected = function (filter) {
    console.log(filter);
    setFiltedValue(filter);
  };

  useEffect(() => {
    if (filtervalue === 'all') {
      console.log(formData.filter((el) => Number(el.date.split('-')[1]) > -1));
      setFilterData(
        formData.filter((el) => Number(el.date.split('-')[1]) > -1)
      );
    } else {
      setFilterData(
        formData.filter((el) => el.date.split('-')[1] === filtervalue)
      );
    }
  }, [filtervalue]);

  const expenseArray = function () {
    let arrExp = [];
    let arrIn = [];
    for (let i = 0; i < filterdata.length; i++) {
      let el = filterdata[i];
      if (el.radioExp === 'expense') {
        arrExp.push(Number(el.amount));
      }
      if (el.radioExp === 'income') {
        arrIn.push(Number(el.amount));
      }
    }
    return {
      expense: arrExp,
      income: arrIn,
    };
  };

  const totalExpenses = expenseArray().expense.reduce(
    (acc, cur) => acc + cur,
    0
  );

  const totalIncome = expenseArray().income.reduce((acc, cur) => acc + cur, 0);

  const balance = totalIncome - totalExpenses;

  const toggleExpenseBoxHandler = function () {
    return setShowExpenseBox(!showExpenseBox);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className={classes['expense-box']}>
        <h3>Balance : {balance} </h3>
        <button onClick={toggleExpenseBoxHandler}>
          {showExpenseBox ? 'CANCEL' : 'ADD'}
        </button>
      </div>
      {showExpenseBox && <From formData={formData} setFormData={setFormData} />}
      <Balance
        totalExpense={totalExpenses}
        totalIncome={totalIncome}
        onFilterVlaueSelected={onFilterVlaueSelected}
        filterdata={filterdata}
      />
      <AddExpense
        formData={formData}
        setFormData={setFormData}
        filterdata={filterdata}
        setFilterData={setFilterData}
      />
    </div>
  );
}

export default App;
