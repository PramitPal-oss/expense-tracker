/** @format */

import React, { useState } from 'react';
import classes from './AddExpense.module.css';

function AddExpense({ formData, setFormData, filterdata, setFilterData }) {
  const deleteHandler = function (e) {
    setFilterData(filterdata.filter((el) => el.id !== e));
    setFormData(formData.filter((el) => el.id !== e));
  };

  return (
    <React.Fragment>
      {filterdata.map((el) => {
        return (
          <div
            className={classes.expense}
            key={el.id}
            style={{
              backgroundColor: el.radioExp === 'expense' ? 'red' : 'green',
            }}
          >
            <p>{el?.expenseType}</p>
            <p>{el?.amount}</p>
            <p className={classes.delete} onClick={() => deleteHandler(el.id)}>
              ⛔
            </p>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default AddExpense;
