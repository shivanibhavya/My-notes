// src/Note.js
import React, { useState } from 'react';

function Note({ id, content, deleteNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleDelete = () => {
    deleteNote(id);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      // Save the edited note content
    }
  };

  const handleEditChange = (event) => {
    setEditedContent(event.target.value);
  };

  return (
    <div className="note">
      {isEditing ? (
        <textarea value={editedContent} onChange={handleEditChange} />
      ) : (
        <p>{content}</p>
      )}
      <button onClick={toggleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Note;
