import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Contact, Button } from './ContactList.styled';
import { AiFillPhone, AiTwotoneDelete } from "react-icons/ai";
import { deleteContact } from 'services/servisApi';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from "react";
import { fetchContacts } from 'services/servisApi';

// const getFilteredContacts = (contacts, filter) =>
//   contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);

  // const filteredContacts = getFilteredContacts(contacts, filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
        {contacts.length ? (
        contacts.map( contact  => (
          <Item key={contact.id} >
            <Contact><AiFillPhone/> {contact.name}: {contact.number}</Contact>    
            <Button type='button' onClick={() => dispatch(deleteContact(contact.id))}><AiTwotoneDelete/> Delete</Button>
          </Item>
          )) ) : (
            <p>Your phonebook is empty. Please add contact.</p>
          )}
          
    </List>        
  );
}