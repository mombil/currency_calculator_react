import { styled } from "styled-components";

export const StyledForm = styled.form`
  margin: 20px;
`;

export const Header = styled.h1`
  display: block;
  padding: 10px;
  background-color: ${({theme}) => theme.colors.headerColor};
  border-radius: 10px;
  margin: 3px;
  text-align: center;
`;

export const Fieldset = styled.fieldset`
  background-color: ${({theme}) => theme.colors.backgroundColor};
  border-radius: 10px;
  padding: 15px, 10px;
`;

export const Label = styled.label`
  font-size: 18px;
  padding: 5px;
  display: block;
  margin: 3px;
`;

export const Input = styled.input`
  max-width: 120px;
  margin: 3px;
  padding: 2px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.primaryColor};
  padding: 5px;
  transition: 0.4s;
  margin: 3px;
`;

export const Paragraph = styled.p`
  padding: 5px;
  font-size: 18px;
  margin: 3px;
`;
