import React, { Component, PropTypes } from 'react';

class Dropdown extends Component {
  constructor (props) {
    super(props);

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.clearClickHandler = this.clearClickHandler.bind(this);

    this.state = {
      open: false,
      value: this.props.placeholder
    }
  }

  dropdownClickHandler () {
    this.setState({
      open: !this.state.open
    });
  }

  listItemClickHandler (item) {
    this.setState({
      open: false,
      value: item
    })
  }

  clearClickHandler () {
    this.setState({
      open: false,
      value: this.props.placeholder
    });
  }

  renderDropdown () {
    if (!this.state.open) return;

    return (
      <div className="Dropdown-list-box">{this.renderListItems()}</div>
    )
  }

  renderListItems () {
    return (this.props.values).map((item, index) => {
      return (
        <div className="Dropdown-list-item" 
             onClick={this.listItemClickHandler.bind(this, item)}
             key={index} >
          {item}
        </div>
      )
    });
  }

  renderClearBtn () {
    if (this.state.value === this.props.placeholder || this.state.open) return;

    return (
      <div className="Dropdown-clear" onClick={this.clearClickHandler}>
        Clear
      </div>
    );
  }

  dropdownArrowClassName () {
    if (this.state.open) return 'Dropdown-list-arrow--up';
    return 'Dropdown-list-arrow';
  }

  dropdownListClassName () {
    if (this.state.value === this.props.placeholder) return 'Dropdown-list';
    return 'Dropdown-list--selected';
  }

  renderTitle () {
    if (!this.props.showTitle) return;

    return (
      <h5>{this.props.title}</h5>
    )
  }

  render () {
    return (
      <div className="Dropdown">
        {this.renderTitle()}

        <div className={this.dropdownListClassName()}  onClick={this.dropdownClickHandler}>
          {this.state.value}
          <div className={this.dropdownArrowClassName()} />
        </div>

        {this.renderDropdown()}
        {this.renderClearBtn()}
      </div>
    );
  }
}

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  title: PropTypes.string,
  showTitle: PropTypes.bool,
  values: PropTypes.array,
}

Dropdown.defaultProps = {
  placeholder: 'Select...',
  title: 'Dropdown',
  showTitle: true,
  values: [],
}

export default Dropdown;
