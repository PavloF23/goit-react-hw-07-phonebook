import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Contact, Button } from './ContactList.styled';
import { AiFillPhone, AiTwotoneDelete } from "react-icons/ai";
import { deleteContact } from 'services/servisApi';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from "react";
import { fetchContacts } from 'services/servisApi';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()))
}

  return (
    <List>
        {contacts.length ? (
         getVisibleContacts().map(({ id, name, number }) => (
          <Item key={id} >
            <Contact><AiFillPhone/> {name}: {number}</Contact>    
            <Button type='button' onClick={() => dispatch(deleteContact(id))}><AiTwotoneDelete/> Delete</Button>
          </Item>
          )) ) : (
            <p>Your phonebook is empty. Please add contact.</p>
          )}
          
    </List>        
  );
}