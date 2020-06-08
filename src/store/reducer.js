import { extend, getFilteredPersons, pushElementToArray } from "../utils";
const initialState = {
  persons: null,
  viewed: [],
  search: ``,
};

const ActionType = {
  LOAD_PERSONS: `LOAD_PERSONS`,
  SET_VIEWED_PERSON: `SET_VIEWED_PERSON`,
  FIND_PERSON_BY_NAME: `FIND_PERSON_BY_NAME`,
};

const ActionCreator = {
  leadPersons: (persons) => ({
    type: ActionType.LOAD_PERSONS,
    payload: persons,
  }),
  setViewedPerson: (id) => ({
    type: ActionType.SET_VIEWED_PERSON,
    payload: id,
  }),
  findPersonByName: (value) => ({
    type: ActionType.FIND_PERSON_BY_NAME,
    payload: value,
  }),
};

const Operation = {
  loadPersons: () => (dispatch, getState, api) => {
    return api
      .get(`/people`)
      .then((response) => {
        dispatch(ActionCreator.leadPersons(getFilteredPersons(response.data.results)));
      })
      .catch((err) => err);
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PERSONS:
      return extend(state, { persons: action.payload });
    case ActionType.SET_VIEWED_PERSON:
      return extend(state, { viewed: pushElementToArray(state.viewed, action.payload) });
    case ActionType.FIND_PERSON_BY_NAME:
      return extend(state, { search: action.payload });
  }
  return state;
};

export { reducer, Operation, ActionType, ActionCreator };
