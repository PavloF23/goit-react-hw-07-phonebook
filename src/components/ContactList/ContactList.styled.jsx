import styled from 'styled-components';

export const List = styled.ul` 
position: relative;
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 30px;  
color: #000;  
font-weight: 500;  
font-size: 20px;
`;

export const Item = styled.li`
display: flex;
justify-content: space-between;

&:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Box = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
margin-left: 20px;
`;

export const Img = styled.img`
border-radius: 50%;
`;

export const Contact = styled.div`
font-size: 15px;
display: flax;
`;

export const Button = styled.button`
width: 85px;
height: auto;
cursor: pointer;
display: inline-block;

background-repeat: no-repeat;
background-size: contain;
background-color: transparent;
border: none;
outline: none;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
transform: scale(1.1);
}
`;