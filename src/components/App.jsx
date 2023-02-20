import { Container }  from './Container/Container';
import { AppStyle } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { getIsLoading, getError } from "redux/selectors";
import { useSelector } from 'react-redux';
import  Loader  from  '../components/Loader/Loader'

export function App() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <AppStyle>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>   
        <Toaster position="top-center" reverseOrder={false}/>  
        <h2>Contacts</h2>
        <Filter/>
        {isLoading && !error && <Loader/>}
        <ContactList/>      
      </Container>
    </AppStyle>
  );
};