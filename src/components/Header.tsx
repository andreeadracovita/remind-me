import { useState } from "react";

function Header() {

	let now = new Date().toLocaleTimeString();

	const [time, setTime] = useState(now);

	setInterval(updateTime, 1000);

	function updateTime() {
		now = new Date().toLocaleTimeString();
		setTime(now);
	}

	return (
		<header>
			<h1>$ remind-me</h1>
			<h1>{time}</h1>
		</header>
	)
}

export default Header