import { REGULARS } from "./const";

export const extend = (firstInnerElement, secondInnerElement) => {
  return Object.assign({}, firstInnerElement, secondInnerElement);
};

export const getFilteredPersons = (persons) =>
  persons.map((person, index) => {
    return {
      id: index + person.height,
      name: person.name,
      birthyear: person.birth_year,
      hairColor: person.hair_color,
      eyeColor: person.eye_color,
      height: person.height,
    };
  });

export const pushElementToArray = (prevState, newElement) => {
  if (Array.isArray(prevState) && !prevState.includes(newElement)) {
    const newArray = prevState;
    newArray.push(newElement);
    return newArray;
  }
  return prevState;
};

export const validWithoutRusAlfabet = (value) => value.split(``).every(symbol => REGULARS.withoutRus.test(symbol));
