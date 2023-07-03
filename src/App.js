import { ThemeProvider } from "styled-components";
import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";
import { theme } from "./theme";
import { GlobalStyle } from "./styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Form />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
