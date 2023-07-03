import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const date = useCurrentDate()

  return (
    <StyledClock>
      Dzisiaj jest&nbsp;
      {date}
    </StyledClock>
  );
};

export default Clock;
