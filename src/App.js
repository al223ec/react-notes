import React, { Component } from 'react';
import NoteEditorContainer from './containers/NoteEditorContainer';
import VisibleNoteList from './containers/VisibleNoteList';
import { transformNotes } from './helpers';
import './App.css';
import ToolbarContainer from './containers/ToolbarContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
      ],
      selectedNoteId: 1,
      searchText: '',
    };

    this.handleNoteEditorChange = this.handleNoteEditorChange.bind(this);
    this.handleClickNote = this.handleClickNote.bind(this);
    this.handleNewNote = this.handleNewNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleSearchNote = this.handleSearchNote.bind(this);
  }

  handleClickNote(selectedNoteId) {
    this.setState({ selectedNoteId });
  }

  handleNoteEditorChange(text) {
    const { notes, selectedNoteId } = this.state;
    const newNotes = notes.map((note) => {
      if (note.id === selectedNoteId) {
        return {
          id: note.id,
          body: text,
          timestamp: Date.now(),
        };
      }

      return note;
    });

    this.setState({ notes: newNotes });
  }

  handleNewNote() {
    const { notes } = this.state;
    const newNote = {
      id: Date.now(),
      body: '',
      timestamp: Date.now(),
    };

    this.setState({
      notes: notes.concat([newNote]),
      selectedNoteId: newNote.id,
    });
  }

  handleDeleteNote() {
    const { notes, selectedNoteId, searchText } = this.state;
    const newNotes = notes.filter(note => note.id !== selectedNoteId);
    const transformedNotes = transformNotes(newNotes, searchText);
    const newSelectedNoteId = transformedNotes.length > 0 ? transformedNotes[0].id : null;

    this.setState({
      notes: newNotes,
      selectedNoteId: newSelectedNoteId,
    });
  }

  handleSearchNote(newSearchText) {
    const { notes, selectedNoteId } = this.state;

    const transformedNotes = transformNotes(notes, newSearchText);
    let newSelectedNoteId = null;
    if (transformedNotes.length > 0) {
      const selectedNote = transformedNotes.find(note => note.id === selectedNoteId);
      if (selectedNote) {
        newSelectedNoteId = selectedNote.id;
      } else {
        newSelectedNoteId = transformedNotes[0].id;
      }
    }
    this.setState({
      searchText: newSearchText,
      selectedNoteId: newSelectedNoteId,
    });
  }

  render() {
    return (
      <div id="app">
        <ToolbarContainer />
        <div className="note-container">
          <VisibleNoteList />
          <NoteEditorContainer />
        </div>
      </div>
    );
  }
}

export default App;
