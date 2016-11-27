import React, { Component, PropTypes } from 'react';

class TextArea extends Component {
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
      <div className="TextArea-clear" onClick={this.clearClickHandler}>
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
    if (this.state.value === '') return 'TextArea-field';
    return 'TextArea-field--filled';
  }

  render () {
    return (
      <div className="TextArea">
        {this.renderTitle()}
        
        <textarea rows="5"
                  className={this.textFieldClassName()}
                  placeholder={this.props.placeholder} 
                  value={this.state.value} 
                  onChange={this.onChangeHandler} />

        {this.renderClearBtn()}
      </div>
    );
  }
}

TextArea.propTypes = {
  title: PropTypes.string,
  showTitle: PropTypes.bool,
  placeholder: PropTypes.string,
}

TextArea.defaultProps = {
  title: 'TextArea',
  showTitle: true,
  placeholder: 'Enter a value...',
}

export default TextArea;
