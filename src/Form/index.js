import { useState } from "react";
import currencies from "./currencies";
import { StyledForm, H1, Fieldset, Label, Input, Button, P } from "./styled";
import Clock from "./Clock";

const Form = () => {
  const [amount, setAmount] = useState(0);
  const [selects, setSelects] = useState("EUR");
  const [result, setResult] = useState("N/A");

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

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Clock />
        <H1>Kaltulator walut</H1>
        <Label>
          {" "}
          Wybierz walutę
          <Input
            as="select"
            value={selects}
            onChange={({ target }) => setSelects(target.value)}
          >
            {currencies.map(currency => (
              <option key={currency.key} value={currency.name}>
                {currency.name}
              </option>
            ))}
          </Input>
        </Label>

        <Label>
          Podaj kwotę w PLN:
          <Input
            className="form__input"
            type="number"
            min="0"
            step="any"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
          <Button type="submit">Wyślij</Button>
        </Label>

        <P>
          Kwota po przeliczeniu wynosi:
          <strong>
            {typeof result === "string"
              ? " N/A"
              : " " + result.result.toFixed(2) + " " + result.sign}
          </strong>
        </P>
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
