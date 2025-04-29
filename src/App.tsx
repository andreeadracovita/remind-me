import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import Form from './components/Form'
import CarsChallege from './components/CarsChallenge'

let id = 0;

function App() {

  const [notes, setNotes] = useState([]);

  const addNote = (input) => {
    event.preventDefault()

    setNotes([
        ...notes,
        {
          id: ++id,
          title: input.title,
          content: input.content
        }
    ]);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <>
      <Header />
      <div>
        <Form onFormSubmit={addNote} />
      </div>
      <div className="note-board">
        {notes.map(note => 
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote} />)}
      </div>
      <Footer />
    </>
  )
}

export default App
