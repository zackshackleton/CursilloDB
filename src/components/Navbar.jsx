import React, { PropTypes } from 'react';

const Navbar = (props) => {
  const renderReturn = () => {
    if (props.currentPage === 'Main' || props.currentPage === 'Login') return;

    return (
      <span className="Navbar-return" 
            onClick={() => {props.updateCurrentPage('Main')}}>
        Return to Home
      </span>
    );
  }

  const renderLogOut = () => {
    if (props.currentPage === 'Login') return;

    return (
      <span onClick={() => {props.updateCurrentPage('Login')}} 
            className="Navbar-LogOut">
        Log Out
      </span>
    )
  }

  return (
    <div className="Navbar">
      {renderReturn()}
      {renderLogOut()}

      <h5>Cursillo DB Manager</h5>
    </div>
  );
}

Navbar.propTypes = {
  currentPage: PropTypes.string,
  updateCurrentPage: PropTypes.func.isRequired,
}

Navbar.defaultProps = {
  currentPage: 'Main'
}

export default Navbar;
