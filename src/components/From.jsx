/** @format */
import React, { useState } from 'react';
import Input from './Input';
import classes from './Form.module.css';
import Button from './Button';

function From({ setFormData, formData }) {
  const [amount, setAmount] = useState('');
  const [expenseType, setExpenseType] = useState('');
  const [radioExp, setRadioExp] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = function (e) {
    e.preventDefault();
    if (
      radioExp === undefined ||
      amount.length === 0 ||
      expenseType.length === 0 ||
      date === ''
    )
      return alert('Please enter all the field before proceed');
    setFormData([
      ...formData,
      {
        amount: amount,
        expenseType: expenseType,
        radioExp: radioExp,
        date: date,
        id: Math.random() * 1000,
      },
    ]);
    console.log(formData);
    setAmount('');
    setExpenseType('');
    setRadioExp('');
  };

  return (
    <div className={classes['form-group']}>
      <form onSubmit={submitHandler} className={classes.form}>
        <Input
          type='number'
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          name='amount'
          placeholder='Amount'
        />
        <Input
          type='text'
          onChange={(e) => setExpenseType(e.target.value)}
          value={expenseType}
          name='expense'
          placeholder='Expense Type'
        />
        <input
          type='date'
          name='date'
          id=''
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <div className={classes['radio-group']}>
          <div className={classes['radio-input']}>
            <input
              type='radio'
              name='amount_type'
              id='expense'
              value='expense'
              onChange={(e) => setRadioExp(e.target.value)}
            />
            <label htmlFor='expense'>Expense</label>
          </div>
          <div className={classes['radio-input']}>
            <input
              type='radio'
              name='amount_type'
              id='income'
              value='income'
              onChange={(e) => setRadioExp(e.target.value)}
            />
            <label htmlFor='income'>Income</label>
          </div>
        </div>
        <Button className={classes.btn}>Add Transaction</Button>
      </form>
    </div>
  );
}

export default From;
