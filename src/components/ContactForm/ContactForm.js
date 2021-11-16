import { useState } from 'react';
import s from './ContactForm.module.css';
import operations from '../../redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts, getTotalContactsCount } from '../../redux/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getAllContacts);
  const total = useSelector(getTotalContactsCount);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const addNewContact = {
      name,
      number,
    };

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number,
      )
    )
      return alert(`${name} witn ${number} is already in Contacts`);

    dispatch(operations.addContact(addNewContact));

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  console.log(contacts);

  return (
    <>
      <span> Total contacts:{total}</span>
      <form onSubmit={handleSubmit}>
        <label>
          Name{' '}
          <input
            className={s.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Number{' '}
          <input
            className={s.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
