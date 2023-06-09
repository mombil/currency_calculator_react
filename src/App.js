import Container from "./Container";
import Footer from "./Footer";
import Form from "./Form";

const currencies = [
	{
		currency: "EUR",
		rate: 4.48,
		key: 1,
	},
	{
		currency: "USD",
		rate: 4.19,
		key: 2,
	},
	{
		currency: "GBP",
		rate: 5.2,
		key: 3,
	},
];

function App() {
	return (
		<Container>
			<Form currencies={currencies} legend={"Kaltulator walut"} />
			<Footer body={"Wartość walut z dnia 03.02.2022 "} />
		</Container>
	);
}

export default App;
