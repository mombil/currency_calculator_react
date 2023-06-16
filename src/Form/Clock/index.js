import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
	const updateDate = () => {
		let actualDate = new Date();
		return actualDate.toLocaleString(undefined, {
			weekday: "long",
			day: "numeric",
			month: "long",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
		});
	};

	const [dateResult, setDateResult] = useState(updateDate());

	useEffect(() => {
		const intervalID = setInterval(() => {
			setDateResult(updateDate());
		}, 1000);
		return () => clearInterval(intervalID);
	}, [dateResult]);

	return (
		<p className="clock">
			Dzisiaj jest&nbsp;
			{dateResult}
		</p>
	);
};

export default Clock;
