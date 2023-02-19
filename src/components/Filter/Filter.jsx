import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactSlice';
import { getFilter } from 'redux/selectors';
import { Container, Label, Input, Span } from './Filter.styled';

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <Container>
    <Label>        
      <Input 
      type="text" 
      name="filter" 
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      value={filter} 
      onChange={onChange} 
      placeholder=" " 
      required
      />
      <Span>Find contacts by name</Span>
    </Label>
    </Container>
  );
};