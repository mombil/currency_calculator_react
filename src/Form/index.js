import "./style.css";

const Form = ({ legend, currencies}) => (
	<form className="form">
		<fieldset className="form__fieldset">
			<legend className="form__legend">{legend}</legend>
			<label className="form__label">
				{" "}
				Wybierz walutę
				<select className="form__select">
					{currencies.map(currency => (
						<option key={currency.key} value={currency.currency}>
							{currency.currency}
						</option>
					))}
				</select>
			</label>
			<br />
			<br />
			<label className="form__label">
				Podaj kwotę w PLN:
				<input type="number" min="0" step="any" className="js-pln" />
			</label>
			<button className="form__button" type="submit">
				Wyślij
			</button>
			<p className="form__text">
				Kwota po przeliczeniu wynosi: <strong> N/A</strong>
			</p>
		</fieldset>
	</form>
);

export default Form;
