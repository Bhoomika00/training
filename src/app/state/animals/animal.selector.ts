import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';
import { AnimalState } from './animal.state';


// Selector functions
const getAnimalFeatureState = createFeatureSelector<AnimalState>('animals');

export const getCurrentAnimalId = createSelector(
  getAnimalFeatureState,
  state => state.currentAnimalId
);

export const getCurrentAnimal = createSelector(
  getAnimalFeatureState,
  getCurrentAnimalId,
  (state, currentAnimalId) => {

    if (currentAnimalId === 0) {
      return {
        id:0,
        name:'',
        breifdesc:'',
        age:0,
        imageUrl:'\\assets\\images\\animal.jpg',
      };
    } else {
      return currentAnimalId ? state.animals.find(p => p.id === currentAnimalId) : null;
    }
  }
);

export const getAnimals = createSelector(
  getAnimalFeatureState,
  state => state.animals
);

export const getError = createSelector(
  getAnimalFeatureState,
  state => state.error
);
