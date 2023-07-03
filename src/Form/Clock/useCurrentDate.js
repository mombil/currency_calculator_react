import { useState, useEffect } from "react";

export const useCurrentDate = () => {
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
    return formatedDate(date)  
}