import { useEffect, useState } from "react";
import currencies from "./currencies";
import "./style.css";

const Form = () => {

	const updateDate = () => {
		let actualDate = new Date();
		return(
		actualDate.toLocaleDateString("pl-US", {
			weekday: "long",
			day: "numeric",
			month: "long",
		}) +
		", " +
		actualDate.toLocaleTimeString()
		)}

	const [amount, setAmount] = useState(0);
	const [selects, setSelects] = useState("EUR");
	const [result, setResult] = useState("N/A");
	const [dateResult, setDateResult] = useState(updateDate());

	const calculateResult = () => {
		const rate = currencies.find(({ name }) => name === selects).rate;
		const sign = currencies.find(({ name }) => name === selects).sign;

		setResult({
			result: amount / rate,
			sign: sign,
		});
	};

	const onFormSubmit = event => {
		event.preventDefault();
		calculateResult();
		setAmount(amount);
	};

	

	useEffect(() => {
		const intervalID = setInterval(() => {
			setDateResult(
				updateDate()
			);
		}, 1000);
		return () => clearInterval(intervalID);
	}, [dateResult]);

	return (
		<form className="form" onSubmit={onFormSubmit}>
			<fieldset className="form__fieldset">
				<p className="form__date">
					Dzisiaj jest&nbsp;
					{dateResult}
				</p>
				<h1 className="form__header">Kaltulator walut</h1>
				<label className="form__label">
					{" "}
					Wybierz walutę
					<select
						className="form__select"
						value={selects}
						onChange={({ target }) => setSelects(target.value)}
					>
						{currencies.map(currency => (
							<option key={currency.key} value={currency.name}>
								{currency.name}
							</option>
						))}
					</select>
				</label>

				<label className="form__label">
					Podaj kwotę w PLN:
					<input
						className="form__input"
						type="number"
						min="0"
						step="any"
						value={amount}
						onChange={({ target }) => setAmount(target.value)}
					/>
					<button className="form__button" type="submit">
						Wyślij
					</button>
				</label>

				<p className="form__text">
					Kwota po przeliczeniu wynosi:
					<strong>
						{typeof result === "string"
							? " N/A"
							: " " + result.result.toFixed(2) + " " + result.sign}
					</strong>
				</p>
			</fieldset>
		</form>
	);
};

export default Form;
