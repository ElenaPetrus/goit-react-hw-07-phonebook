import ContactForm from './components/ContactForm/ContactForm';
import { Filter } from './components/FIlter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import { getTotalContactsCount } from './redux/selectors';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <span> Total contacts: {getTotalContactsCount}</span>

      <ContactForm />

      <h2 className={s.title}>Contacts</h2>

      <Filter />

      <ContactList />
    </div>
  );
}
