import React from 'react';

const Main = (props) => {
  return (
    <div className="Main">
      <h3>Look Up Queries</h3>
      <div className="container">
        <button className="Main-LookUpCursillo" onClick={() => {props.updateCurrentPage('Look Up Cursillo')} }>
          Look Up Cursillo
        </button>

        <button className="Main-LookUpIndividual" onClick={() => {props.updateCurrentPage('Look Up Individual')} }>
          Look Up Individual
        </button>

        <button className="Main-LookUpParish" onClick={() => {props.updateCurrentPage('Look Up Parish')} }>
          Look Up Parish
        </button>
      </div>

      <h3>Add Table</h3>
      <div className="container">
        <button className="Main-Cursillo" onClick={() => {props.updateCurrentPage('Add Cursillo')} }>
          Add Cursillo
        </button>
        
        <button className="Main-Individual" onClick={() => {props.updateCurrentPage('Add Individual')} }>
          Add Individual
        </button>
        
        <button className="Main-Parish" onClick={() => {props.updateCurrentPage('Add Parish')} }>
          Add Parish
        </button>
      </div>
    </div>
  );
}

export default Main;
