
import React from 'react';
import Note from './Note';

function NoteList({ notes, deleteNote }) {
  return (
    <div>
      {notes.map(note => (
        <Note key={note.id} id={note.id} content={note.content} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
