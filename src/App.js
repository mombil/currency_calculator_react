import { ThemeProvider } from "styled-components";
import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
