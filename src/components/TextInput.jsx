import React, { Component, PropTypes } from 'react';

class TextInput extends Component {
  constructor () {
    super();

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.clearClickHandler = this.clearClickHandler.bind(this);

    this.state = {
      value: ''
    }
  }

  onChangeHandler (event) {
    event.preventDefault();

    this.setState({ value: event.target.value });
  }

  clearClickHandler () {
    this.setState({
      value: ''
    });
  }

  renderClearBtn () {
    if (this.state.value === '') return;

    return (
      <div className="TextInput-clear" onClick={this.clearClickHandler}>
        Clear
      </div>
    );
  }

  renderTitle () {
    if (!this.props.showTitle) return;

    return (
      <h5>{this.props.title}</h5>
    )
  }

  textFieldClassName () {
    if (this.state.value === '') return 'TextInput-field';
    return 'TextInput-field--filled';
  }

  render () {
    return (
      <div className="TextInput">
        {this.renderTitle()}
        
        <input type="text" 
               className={this.textFieldClassName()}
               placeholder={this.props.placeholder} 
               value={this.state.value} 
               onChange={this.onChangeHandler} />

        {this.renderClearBtn()}
      </div>
    );
  }
}

TextInput.propTypes = {
  title: PropTypes.string,
  showTitle: PropTypes.bool,
  placeholder: PropTypes.string,
}

TextInput.defaultProps = {
  title: 'TextInput',
  showTitle: true,
  placeholder: 'Enter a value...',
}

export default TextInput;
