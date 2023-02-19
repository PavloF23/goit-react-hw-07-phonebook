import { Container }  from './Container/Container';
import { AppStyle } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <AppStyle>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>   
        <Toaster position="top-center" reverseOrder={false}/>  
        <h2>Contacts</h2>
        {contacts.length !== 0 && <Filter />}
        <ContactList/>      
      </Container>
    </AppStyle>
  );
};