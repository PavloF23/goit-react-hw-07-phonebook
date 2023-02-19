import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const FormContact = styled(Form)`
margin-top: 20px;
display: flex;
flex-direction: column;
gap: 24px;
align-items: center;
`;

// export const FormControl = styled.div`
//   position: relative;
// `;

export const Label = styled.label`
position: relative;
display: block;
width: 400px;
height: 10px;
margin-bottom: 50px;
color: #000;
font-size: 18px;

// &focus::placeholder {
//   color: #010101;
// }

& input:focus ~ span,
& input:not(:placeholder-shown) ~ span{
    transform: translateX(-13px) translateY(-30px);
    font-size: 20px;
}
`;

export const Input = styled(Field)`
position: absolute;
top: 0;
left: 0;
width: 100%;
border: 2px solid rgba(33, 33, 33, 0.2);
color: #000;
outline: none;
background: #fff;
padding: 10px;
border-radius: 10px;
font-size: 20px;

&:focus,
&:not(:placeholder-shown) {
    border-color: #010101;
    outline-color: rgba(33, 33, 33, 0.5);
  }
`;

export const Span = styled.span`
position: absolute;
top: 5px;
left: 10px;
font-size: 30px;
transition: 0.6s;
color: #5793aad2;
`;

export const Button = styled.button`
width: 200px;
  height: 50px;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.2s;
  background-color: #fff;
  border: 2px solid rgba(33, 33, 33, 0.2);
  margin-bottom: 20px;

  &:hover{
    background-color: rgb(207, 207, 207);
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -50px;
  left: 15px;
  font-size: 12px;
  color: #ff4500;
`;