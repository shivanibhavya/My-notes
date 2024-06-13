// src/AddNote.js
import React, { useState } from 'react';

function AddNote({ addNote }) {
  const [noteContent, setNoteContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteContent.trim()) {
      addNote(noteContent);
      setNoteContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        placeholder="Add a new note..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default AddNote;
