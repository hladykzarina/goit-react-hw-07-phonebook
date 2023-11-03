import React from 'react';
import s from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/operations/contactsThunk';

export const MyForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newObj = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    dispatch(addContactThunk(newObj));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        <input
          className={s.inputField}
          placeholder="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <input
          className={s.inputField}
          placeholder="Phone number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={s.button}>
        Add Contact
      </button>
    </form>
  );
};
