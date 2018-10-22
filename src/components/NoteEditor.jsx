import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatTimestamp } from '../helpers';

class NoteEditor extends Component {
  constructor(props) {
    super(props);
    const { body } = this.props;
    this.state = {
      body,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { body } = nextProps;
    this.setState({
      body,
    });
  }

  handleChange(event) {
    const { id, editNote } = this.props;
    const body = event.target.value;
    this.setState({
      body
    });

    editNote({ id, body });
  }

  render() {
    const { id, timestamp } = this.props;
    if (!id) {
      return null;
    }
    const { body } = this.state;

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

NoteEditor.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  editNote: PropTypes.func.isRequired,
};

export default NoteEditor;
