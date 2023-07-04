import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {

  const formatedDate = date =>
    date.toLocaleString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  const date = useCurrentDate();

  return (
    <StyledClock>
      Dzisiaj jest&nbsp;
      {formatedDate(date)}
    </StyledClock>
  );
};

export default Clock;
