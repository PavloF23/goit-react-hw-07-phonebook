import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormContact, Label, Span, Input, Button, Error } from './ContactForm.styled';
import { addContact } from 'redux/contactSlice';
import toast from 'react-hot-toast';

export function ContactForm() {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    number: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  const notify = () => toast.error('Write name, please');

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      )
      .required(notify),
    number: Yup.string()
      .matches(
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
        'Phone number must be digits'
      )
      .required('This field is required'),
  });  

    return (
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormContact autoComplete="off">
      {/* <FormControl> */}
        <Label>          
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder=" "
          />
          <Span>Name</Span>
          {/* <Error component="div" name="name" /> */}
        </Label>
        
        <Label>       
          <Input       
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder=" "
          />
          <Span>Number</Span>
          <Error component="div" name="number" />
        </Label>
        
        {/* </FormControl> */}
        <Button type="submit">Add contact</Button>
      </FormContact>
      </Formik>
    );
  }