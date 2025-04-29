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

  const handleFormSubmit = (input) => {
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

  return (
    <>
      <Header />
      <div>
        {notes.map(note => 
          <Note
            key={note.id}
            title={note.title}
            content={note.content} />)}
      </div>
      <div>
        <Form onFormSubmit={handleFormSubmit} />
      </div>
      <Footer />
    </>
  )
}

export default App
