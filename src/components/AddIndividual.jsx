import React, { Component, PropTypes } from 'react';
import TextInput from './TextInput';
import Dropdown from './Dropdown';
import ButtonRow from './ButtonRow';

class AddIndividual extends Component {
  constructor () {
    super ();

    this.submitClickHandler = this.submitClickHandler.bind(this);
    this.cancelClickHandler = this.cancelClickHandler.bind(this);
  }

  cancelClickHandler () {
    this.props.updateModal(null);
  }

  submitClickHandler () {
    this.props.updateModal(null);
  }

  render () {
    return (
      <div className="AddIndividual">
        <h3>Add Individual</h3>

        <div className="container">
          <TextInput title="Individual ID" ref="individualID" />
          <Dropdown  title="Role" values={["Family", "Finance", "General", "Kitchen", "Landscape", "Prayer", "Sanitation", "Security", "Water"]} ref="individualRole" />
        </div>

        <ButtonRow onSubmit={this.submitClickHandler}
                   onCancel={this.cancelClickHandler} />
      </div>
    );
  }
}

export default AddIndividual;
