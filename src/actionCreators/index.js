import * as actionTypes from '../actionTypes';
import UserService from '../services/UserService';

const userService = new UserService();

const createIndividual = (payload) => {
  return (dispatch) => {
    userService.createIndividual(payload).then((response) => {
      payload.success();
    })
  }
};

const createCursillo = (payload) => {
  return (dispatch) => {
    userService.createCursillo(payload).then((response) => {
      payload.success();
    })
  }
};

const createParish = (payload) => {
  return (dispatch) => {
    userService.createParish(payload).then((response) => {
      payload.success();
    })
  }
};

const lookUpIndividual = (payload) => {
  return (dispatch) => {
    userService.lookUpIndividual(payload).then((response) => {
      dispatch({ type: actionTypes.LOOKUP_INDIVIDUAL, payload: response });
      payload.success();
    })
  }
};

const lookUpCursillo = (payload) => {
  return (dispatch) => {
    userService.lookUpCursillo(payload).then((response) => {
      dispatch({ type: actionTypes.LOOKUP_CURSILLO, payload: response });
      payload.success();
    })
  }
};

const lookUpParish = (payload) => {
  return (dispatch) => {
    userService.lookUpParish(payload).then((response) => {
      dispatch({ type: actionTypes.LOOKUP_PARISH, payload: response });
      payload.success();
    })
  }
};

const removeIndividual = (payload) => {
  return (dispatch) => {
    userService.removeIndividual(payload);
  }
};

const removeCursillo = (payload) => {
  return (dispatch) => {
    userService.removeCursillo(payload);
  }
};

const removeParish = (payload) => {
  return (dispatch) => {
    userService.removeParish(payload);
  }
};


const actionCreators = {
  createIndividual,
  createCursillo,
  createParish,
  lookUpIndividual,
  lookUpCursillo,
  lookUpParish,
  removeIndividual,
  removeCursillo,
  removeParish,
};

export { actionCreators };
