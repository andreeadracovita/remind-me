function Note(props) {

	return (
		<div className="note">
			<p className="title">{props.title}</p>
			<p className="content">{props.content}</p>
			<p className="complete" onClick={() => props.deleteNote(props.id)}>$ remove note</p>
		</div>
	)
}

export default Note