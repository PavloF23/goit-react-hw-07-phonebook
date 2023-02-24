import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Contact, Button, Img, Box } from './ContactList.styled';
import { AiFillPhone, AiTwotoneDelete } from "react-icons/ai";
import { deleteContact, fetchContacts } from 'redux/operation';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from "react";

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
         getVisibleContacts().map(({ id, name, number, foto }) => (
          <Item key={id} >
            <Contact>
              <Img width={60} src={foto} alt="avatar"/>
              <Box>
                  <span><AiFillPhone/>{name}:</span>
                  <span>{number}</span>
              </Box>
            </Contact>    
            <Button type='button' onClick={() => dispatch(deleteContact(id))}><AiTwotoneDelete/> Delete</Button>
          </Item>
          )) ) : (
            <p>Your phonebook is empty. Please add contact.</p>
          )}
          
    </List>        
  );
}