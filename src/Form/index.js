import { useState } from "react";
import { useApi } from "../useApi";
import {
  StyledForm,
  Header,
  Fieldset,
  Label,
  Input,
  Button,
  Paragraph,
  Loading,
  Error,
} from "./styled";
import Clock from "./Clock";

const Form = () => {
  const [amount, setAmount] = useState(0);
  const [selects, setSelects] = useState("EUR");
  const [result, setResult] = useState("N/A");
  const currencies = useApi();

  const calculateResult = () => {
    const rate = currencies.rates[selects];

    setResult({
      result: amount * rate,
      name: selects,
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    if (amount) {
      calculateResult();
      setAmount(amount);
    }
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Clock />
        <Header>Kaltulator walut</Header>
        {currencies.requestState === "loading" ? (
          <Loading>Proszę poczekać. Trwa ładowanie walut.</Loading>
        ) : currencies.requestState === "error" ? (
          <Error>
            Przepraszamy nie jesteśmy w stanie obsłużyć żądania. Sprawdź
            połączenie z internetem.
          </Error>
        ) : (
          <>
            <Label>
              {" "}
              Wybierz walutę
              <Input
                as="select"
                value={selects}
                onChange={({ target }) => setSelects(target.value)}
              >
                {Object.keys(currencies.rates).map(currency => (
                  <option key={currency} value={currency}>
                    {currency}
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
            </Label>

            <Button type="submit">Wyślij</Button>

            <Paragraph>
              Kwota po przeliczeniu wynosi:
              <strong>
                {typeof result === "string"
                  ? " N/A"
                  : " " + result.result.toFixed(2) + " " + result.name}
              </strong>
            </Paragraph>
          </>
        )}
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
