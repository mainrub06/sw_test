export const getPersons = (state) => {
  if (state.search) {
    const newArr = state.persons.filter((person) => {
      return person.name.toLowerCase().includes(state.search);
    });
    return newArr;
  }

  return state.persons;
};

export const getPersonById = (state, ownProps) => {
  if (state.persons) {
    return state.persons.find((person) => person.id === ownProps.match.params.id);
  }
};

export const getViewed = (state) => {
  if (state.viewed.length !== 0) {
    return state.viewed;
  }
  return [];
};
