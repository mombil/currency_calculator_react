import { styled } from "styled-components";

export const StyledForm = styled.form`
  margin: 20px;
`;

export const Header = styled.h1`
  display: block;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.headerColor};
  border-radius: 10px;
  margin: auto;
  text-align: center;
  max-width: 300px;
  text-align: center;
`;

export const Fieldset = styled.fieldset`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: 10px;
  padding: 15px, 10px;
  max-width: 500px;
  margin: auto;
`;

export const Label = styled.label`
  font-size: 18px;
  padding: 5px;
  display: block;
  margin: 3px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Input = styled.input`
  max-width: 120px;
  margin: 3px;
  padding: 2px;
`;

export const Button = styled.button`
  display: block;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  padding: 5px 40%;
  transition: 0.4s;
  margin: auto;
`;

export const Paragraph = styled.p`
  padding: 5px;
  font-size: 18px;
  margin: 3px;
`;

export const Loading = styled(Paragraph)`
  text-align: center;
  color: white;
`;

export const Error = styled(Paragraph)`
  text-align: center;
  color: red;
`;