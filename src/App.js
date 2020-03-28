import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';

import notes from './notes';

function createNote(noteItem) {
  return <Note 
    key={noteItem.key}
    title={noteItem.title}
    content={noteItem.content}
  />
}

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
