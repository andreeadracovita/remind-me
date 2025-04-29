import { useState } from "react";

function Form({ onFormSubmit }) {

	const [buttonFocus, setButtonFocus] = useState(false);
	const [input, setInput] = useState({
		title: "",
		content: ""
	});

	function onMouseEnter() {
		setButtonFocus(true);
	}

	function onMouseLeave() {
		setButtonFocus(false);
	}

	const buttonStyle = {
		backgroundColor: "black",
		color: "white"
	}
	
	function handleChange(event) {
		const { value, name } = event.target;

		setInput((prevValue) => {
			return {
				...prevValue,
				[name]: value
			}
		});
	}

	return (
		<div>
			<form className="note" onSubmit={() => onFormSubmit(input)}>
				<input onChange={handleChange} type="text" name="title" placeholder="Title" value={input.title} />
				<input onChange={handleChange} type="text" name="content" placeholder="Content" value={input.content} />
				<button style={buttonFocus ? buttonStyle : null} type="submit" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>$ add note</button>
			</form>
		</div>
	)
}

export default Form