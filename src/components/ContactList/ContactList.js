import React, { useEffect } from 'react';
import s from './ContactList.module.css';
import { Loader } from '../Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/operations';
import { getVisibleContacts, getLoading } from '../../redux/selectors';

function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getContacts());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      <ul className={s.contactList}>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <span className={s.text}>{name}</span>
            <span className={s.text}>{number}</span>
            <button
              type="button"
              onClick={() => dispatch(operations.deleteContact(id))}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export { ContactList };
