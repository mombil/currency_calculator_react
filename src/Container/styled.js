import { styled } from "styled-components";

export const Main = styled.main`
  max-width: ${({theme}) => theme.breakpoints.largeDevice};
  margin: auto;
  color: ${({theme}) => theme.colors.primaryColor};
  background-position: center;
  background-size: cover;
`;
