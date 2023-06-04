import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";


function App() {
	return (
		<Container>
			<Form legend={"Kaltulator walut"} />
			<Footer body={"Wartość walut z dnia 03.02.2022 "} />
    </Container>
	);
}

export default App;
