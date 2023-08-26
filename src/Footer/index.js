import { StyledFooter } from "./styled";
import { useApi } from "../useApi";

const Footer = () => {
  const date = useApi()
  return (
    <StyledFooter className="footer">
      Dane pobierane są z Europejskiego Banku Centralnego.
      Wartość walut z dnia {date.date}
    </StyledFooter>
  );
};

export default Footer;
