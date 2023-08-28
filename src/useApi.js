import axios from "axios";
import { useEffect, useState } from "react";

export const useApi = () => {
  const [currencies, setCurrencies] = useState({ requestState: "loading" });
  const apiURL = "https://api.exchangerate.host/latest?base=PLN"
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        await axios
          .get(apiURL)
          .then(response => setCurrencies(response.data));
          
      } catch (error) {
        setCurrencies({ requestState: "error" });
      }
    };

    setTimeout(() => {
      fetchCurrencies();
    }, 1000);
  }, []);

  return currencies;
};
