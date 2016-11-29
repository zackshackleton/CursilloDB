 import * as actionTypes from '../actionTypes';

const infoReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_INDIVIUAL:
      return Object.assign({}, state, {});

    case actionTypes.CREATE_CURSILLO:
      return Object.assign({}, state, {});

    case actionTypes.CREATE_PARISH:
      return Object.assign({}, state, {});

    case actionTypes.LOOKUP_INDIVIDUAL:
      return Object.assign({}, state, {
        result: action.payload.data.individuals
      });

    case actionTypes.LOOKUP_CURSILLO:
      return Object.assign({}, state, {
        result: action.payload.data.cursillos
      });

    case actionTypes.LOOKUP_PARISH:
      return Object.assign({}, state, {
        result: action.payload.data.parishs
      });

    default:
      return state;
  }
};

export { infoReducer };
