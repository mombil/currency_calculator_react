import "./style.css";

const Form = ({legend}) => (
	<form className="js-form form">
		<fieldset className="form__fieldset">
			<legend className="form__legend">{legend}</legend>
			<label className="form__label">
				{" "}
				Wybierz walutę
				<select className="js-currency">
					<option value="EUR">Euro</option>
					<option value="USD">USD</option>
					<option value="GBP">Funt Brytyjski</option>
				</select>
			</label>
			<br />
			<br />
			<label className="form__label">
				Podaj kwotę w PLN:
				<input type="number" min="0" step="any" className="js-pln" />
			</label>
			<p className="form__text">
				Kwota po przeliczeniu wynosi: <strong className="js-result"> N/A</strong>
			</p>
		</fieldset>
	</form>
);

export default Form;
