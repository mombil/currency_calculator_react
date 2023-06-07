import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";

const currencies = [{
	currency: "EUR",
	worth: "4,48",
	key: 1,
},
{
	currency: "USD",
	worth: "4,19",
	key: 2,
},
{
	currency: "GBP",
	worth: "5,20",
	key: 3,
},
]

function App() {
	return (
		<Container>
			<Form currencies={currencies} legend={"Kaltulator walut"} />
			<Footer body={"Wartość walut z dnia 03.02.2022 "} />
    </Container>
	);
}

export default App;
