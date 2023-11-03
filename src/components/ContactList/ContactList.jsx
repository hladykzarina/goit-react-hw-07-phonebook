import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/operations/contactsThunk';
import { getFilteredContacts } from 'redux/selectors/selectors';
import s from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);

  return (
    <>
      <ul>
        {contacts.map(item => (
          <li key={item.id} className={s.listItem}>
            <p className={s.listUser}>
              <b>{item.name}</b> {item.number}
            </p>
            <button
              type="button"
              onClick={() => dispatch(deleteContactThunk(item.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
