import { useState, useEffect } from "react";
import { StyledClock } from "./styled";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, [date]);

  const formatedDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <StyledClock>
      Dzisiaj jest&nbsp;
      {formatedDate(date)}
    </StyledClock>
  );
};

export default Clock;
