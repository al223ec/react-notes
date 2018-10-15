import React from 'react';
import PropTypes from 'prop-types';
import { formatTitle, formatTimestamp } from '../helpers';

const onKeyPressHandler = onClick => (e) => {
  const { keyCode } = e;
  console.log('onKeyPressHandler->', e);
  if (keyCode === 13) {
    onClick();
  }
};

const NoteSelector = ({
  onClick,
  body,
  timestamp,
  selected,
}) => (
  <div
    className={`note-selector ${selected ? 'active' : ''}`}
    onClick={onClick}
    role="button"
    tabIndex="0"
    onKeyPress={onKeyPressHandler(onClick)}
  >
    <p className="note-selector-title">
      {formatTitle(body)}
    </p>
    <p className="note-selector-timestamp">
      {formatTimestamp(timestamp)}
    </p>
  </div>
);

NoteSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default NoteSelector;
