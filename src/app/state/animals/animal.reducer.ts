import { createReducer, on } from "@ngrx/store";
import { initialState } from "./animal.state";
import { AnimalState } from "./animal.state";
import * as AnimalActions from './animal.actions'

export const animalReducer = createReducer<AnimalState>(
  initialState,
  
  on(AnimalActions.setCurrentAnimal, (state, action): AnimalState => {
    return {
      ...state,
      currentAnimalId: action.currentAnimalId
    };
  }),
  on(AnimalActions.clearCurrentAnimal, (state): AnimalState => {
    return {
      ...state,
      currentAnimalId: null
    };
  }),
  on(AnimalActions.initializeCurrentAnimal, (state): AnimalState => {
    return {
      ...state,
      currentAnimalId: 0
    };
  }),
  on(AnimalActions.loadAnimalSuccess, (state, action): AnimalState => {
    return {
      ...state,
      animals: action.animals,
      error: ''
    };
  }),
  on(AnimalActions.loadAnimalsFailure, (state, action): AnimalState => {
    return {
      ...state,
      animals: [],
      error: action.error
    };
  }),
  on(AnimalActions.updateAnimalSuccess, (state, action): AnimalState => {
    const updatedAnimals = state.animals.map(
      item => action.animal.id === item.id ? action.animal : item);
    return {
      ...state,
      animals: updatedAnimals,
      currentAnimalId: action.animal.id,
      error: ''
    };
  }),
  on(AnimalActions.updateAnimalFailure, (state, action): AnimalState => {
    return {
      ...state,
      error: action.error
    };
  }),
  // After a create, the currentAnimal is the new animal.
  on(AnimalActions.createAnimalSuccess, (state, action): AnimalState => {
    return {
      ...state,
      animals: [...state.animals, action.animal],
      currentAnimalId: action.animal.id,
      error: ''
    };
  }),
  on(AnimalActions.createAnimalFailure, (state, action): AnimalState => {
    return {
      ...state,
      error: action.error
    };
  }),
  // After a delete, the currentAnimal is null.
  on(AnimalActions.deleteAnimalSuccess, (state, action): AnimalState => {
    return {
      ...state,
      animals: state.animals.filter(animal => animal.id !== action.animalId),
      currentAnimalId: null,
      error: ''
    };
  }),
  on(AnimalActions.deleteAnimalFailure, (state, action): AnimalState => {
    return {
      ...state,
      error: action.error
    };
  })
);