import { useState } from "react";
import currencies from "./currencies";
import "./style.css";

const Form = ({ legend }) => {
	const [amount, setAmount] = useState(0);
	const [selects, setSelects] = useState("EUR");
	const [result, setResult] = useState("N/A");
	const [sign, setSign] = useState("");

	const calculateResult = () => {
		switch (selects) {
			case "EUR":
				setResult(amount / currencies[0].rate);
				setSign("€");
				break;

			case "GBP":
				setResult(amount / currencies[1].rate);
				setSign("£");
				break;

			case "USD":
				setResult(amount / currencies[2].rate);
				setSign("$");
				break;

			default:
		}
	};

	const onFormSubmit = event => {
		event.preventDefault();
		calculateResult();
		setAmount(amount);
	};

	return (
		<form className="form" onSubmit={onFormSubmit}>
			<fieldset className="form__fieldset">
				<legend className="form__legend">{legend}</legend>
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
				<br />
				<br />
				<label className="form__label">
					Podaj kwotę w PLN:
					<input
						type="number"
						min="0"
						step="any"
						value={amount}
						onChange={({ target }) => setAmount(target.value)}
					/>
				</label>
				<button className="form__button" type="submit">
					Wyślij
				</button>
				<p className="form__text">
					Kwota po przeliczeniu wynosi:
					<strong>
						{typeof result === "string"
							? " N/A"
							: " " + result.toFixed(2) + " " + sign}
					</strong>
				</p>
			</fieldset>
		</form>
	);
};

export default Form;
