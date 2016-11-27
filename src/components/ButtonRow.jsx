import React, { PropTypes } from 'react';

const ButtonRow = (props) => {
  return (
    <div className="ButtonRow">
      <div className="ButtonRow-content">
        <button className="Cancel" onClick={props.onCancel}>Cancel</button>
        <button className="Submit" onClick={props.onSubmit}>Submit</button>
      </div>
    </div>
  );
}

ButtonRow.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default ButtonRow;
