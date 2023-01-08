

import { createAction, props } from '@ngrx/store';
import { Ianimal } from 'src/app/animals/animal.service';



export const setCurrentAnimal = createAction(
  '[Animal] Set Current animal',
  props<{ currentAnimalId: number }>()
);

export const clearCurrentAnimal = createAction(
  '[Animal] Clear Current animal'
);

export const initializeCurrentAnimal = createAction(
  '[Animal] Initialize Current animal'
);

export const loadAnimals = createAction(
  '[Animal] Load'
);

export const loadAnimalSuccess = createAction(
  '[Animal] Load Success',
  props<{ animals: Ianimal[] }>()
);

export const loadAnimalsFailure = createAction(
  '[Animal] Load Fail',
  props<{ error: string }>()
);

export const updateAnimal = createAction(
  '[Animal] Update Animal',
  props<{ animal: Ianimal }>()
);

export const updateAnimalSuccess = createAction(
  '[Animal] Update Animal Success',
  props<{ animal: Ianimal }>()
);

export const updateAnimalFailure = createAction(
  '[Animal] Update Animal Fail',
  props<{ error: string }>()
);

export const createAnimal = createAction(
  '[Animal] Create Animal',
  props<{ animal: Ianimal }>()
);

export const createAnimalSuccess = createAction(
  '[Animal] Create Animal Success',
  props<{ animal: Ianimal }>()
);

export const createAnimalFailure = createAction(
  '[Animal] Create Animal Fail',
  props<{ error: string }>()
);

export const deleteAnimal = createAction(
  '[Animal] Delete Animal',
  props<{ animalId: number }>()
);

export const deleteAnimalSuccess = createAction(
  '[Animal] Delete Animal Success',
  props<{ animalId: number }>()
);

export const deleteAnimalFailure = createAction(
  '[Animal] Delete Animal Fail',
  props<{ error: string }>()
);