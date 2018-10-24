import React from 'react';
import NoteEditorContainer from './containers/NoteEditorContainer';
import NoteListContainer from './containers/NoteListContainer';
import './App.css';
import ToolbarContainer from './containers/ToolbarContainer';

const App = () => (
  <div id="app">
    <ToolbarContainer />
    <div className="note-container">
      <NoteListContainer />
      <NoteEditorContainer />
    </div>
  </div>
);

export default App;
