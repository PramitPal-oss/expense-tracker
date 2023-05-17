/** @format */

import React, { useState, useEffect } from 'react';
import classes from './Balance.module.css';
import Filter from './Filter';

function Balance({ totalExpense, totalIncome, onFilterVlaueSelected }) {
  const filterHandler = function (e) {
    onFilterVlaueSelected(e.target.value);
  };

  return (
    <div className={classes.balance}>
      <div className={classes.expense}>
        <p className={classes.title}>Expense</p>
        <p className={classes.amount}>{totalExpense}</p>
      </div>
      <Filter onChange={filterHandler} />
      <div className={classes.income}>
        <p className={classes.title}>Income</p>
        <p className={classes.amount}>{totalIncome}</p>
      </div>
    </div>
  );
}

export default Balance;
