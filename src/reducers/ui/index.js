import { combineReducers } from 'redux';
import { Router } from 'libs/routing';

import loading from './loading';
import modal from './modal';

import InitialState from 'constants/InitialState';

import {
  SET_GLOBAL_ERROR,
  SET_PATHNAME,
  SET_USER_LOCATION,
  INITIAL_VEHICLES_LOADED,
} from 'constants/ActionTypes';

function currentAgency(state = InitialState.ui.currentAgency) {
  return state;
}

function route(state = InitialState.ui.route, action = {}) {
  if (action.type === SET_PATHNAME) {
    return Router.lookup(action.payload);
  }
  return state;
}

function initialVehiclesLoaded(state = InitialState.ui.initialVehiclesLoaded, action = {}) {
  if (action.type === INITIAL_VEHICLES_LOADED) {
    return true;
  }
  return state;
}

function globalError(state = InitialState.ui.globalError, action = {}) {
  if (action.type === SET_GLOBAL_ERROR) {
    return action.payload;
  }
  return state;
}

function userLocation(state = InitialState.ui.userLocation, action = {}) {
  if (action.type === SET_USER_LOCATION) {
    return action.payload;
  }
  return state;
}

export default combineReducers({
  globalError,
  currentAgency,
  route,
  userLocation,
  loading,
  modal,
  initialVehiclesLoaded,
});
