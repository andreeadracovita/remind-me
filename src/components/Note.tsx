function Note() {

	const title = "This is the note title";
	const content = "This is the note content";

	return (
		<div className="note">
			<p className="title" contentEditable>{title}</p>
			<p className="content" contentEditable>{content}</p>
		</div>
	)
}

export default Note