import React, { Component } from 'react';

function formatTimestamp(timestamp) {
  return new Date(timestamp).toUTCString();
}

class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { onNoteEditorChange } = this.props;
    onNoteEditorChange(event.target.value);
  }

  render() {
    const { selectedNote } = this.props;
    if (!selectedNote) {
      return null;
    }
    const { timestamp, body } = selectedNote;

    return (
      <div className="note-editor">
        <p className="note-editor-info">
          {formatTimestamp(timestamp)}
        </p>
        <textarea
          className="note-editor-input"
          value={body}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default NoteEditor;
