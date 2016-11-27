import * as actionTypes from '../actionTypes';
import UserService from '../services/UserService';

const userService = new UserService();

const createIndividual = (payload) => {
  return (dispatch) => {
    userService.createIndividual(payload);
    dispatch({ type: actionTypes.CREATE_INDIVIDUAL, payload });
  }
};

const createCursillo = (payload) => {
  return (dispatch) => {
    userService.createCursillo(payload);
    dispatch({ type: actionTypes.CREATE_CURSILLO, payload });
  }
};

const createParish = (payload) => {
  return (dispatch) => {
    userService.createParish(payload);
    dispatch({ type: actionTypes.CREATE_PARISH, payload });
  }
};

const lookUpIndividual = (payload) => {
  return (dispatch) => {
    userService.lookUpIndividual(payload);
    dispatch({ type: actionTypes.LOOKUP_INDIVIDUAL, payload });
  }
};

const lookUpCursillo = (payload) => {
  return (dispatch) => {
    userService.lookUpCursillo(payload);
    dispatch({ type: actionTypes.LOOKUP_CURSILLO, payload });
  }
};

const lookUpParish = (payload) => {
  return (dispatch) => {
    userService.lookUpParish(payload);
    dispatch({ type: actionTypes.LOOKUP_PARISH, payload });
  }
};


const actionCreators = {
  createIndividual,
  createCursillo,
  createParish,
  lookUpIndividual,
  lookUpCursillo,
  lookUpParish
};

export { actionCreators };
