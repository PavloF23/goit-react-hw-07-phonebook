import { useDispatch } from 'react-redux';
import { List, Item, Contact, Button } from './ContactList.styled';
import { AiFillPhone, AiTwotoneDelete } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selectors';

const getFilteredContacts = (contacts, filter) =>
  contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <List>
        {filteredContacts.length ? (
        filteredContacts.map( contact  => (
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