import { styled } from "styled-components";

export const StyledFooter = styled.footer`
    color: #000;
	text-align: center;
	padding: 10px 5px;
	background-color: ${({theme}) => theme.colors.primaryColor};
	border-radius: 10px;
	max-width: 400px;
	text-align: center;
	margin: auto;
`