import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';



import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AnimalActions from './animal.actions';
import { AnimalService } from 'src/app/animals/animal.service';

@Injectable()
export class AnimalEffects {

  constructor(private actions$: Actions, private productService: AnimalService) { }

  loadAnimals$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AnimalActions.loadAnimals),
        mergeMap(() => this.productService.getAnimals()
          .pipe(
            map(animals => AnimalActions.loadAnimalSuccess({ animals })),
            catchError(error => of(AnimalActions.loadAnimalsFailure({ error })))
          )
        )
      );
  });

  updateAnimal$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AnimalActions.updateAnimal),
        concatMap(action =>
          this.productService.updateAnimal(action.animal)
            .pipe(
              map(animal => AnimalActions.updateAnimalSuccess({ animal })),
              catchError(error => of(AnimalActions.updateAnimalFailure({ error })))
            )
        )
      );
  });

  createAnimal$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AnimalActions.createAnimal),
        concatMap(action =>
          this.productService.createAnimal(action.animal)
            .pipe(
              map(animal => AnimalActions.createAnimalSuccess({ animal })),
              catchError(error => of(AnimalActions.createAnimalFailure({ error })))
            )
        )
      );
  });

  deleteAnimal$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AnimalActions.deleteAnimal),
        mergeMap(action =>
          this.productService.deleteAnimal(action.animalId).pipe(
            map(() => AnimalActions.deleteAnimalSuccess({ animalId: action.animalId })),
            catchError(error => of(AnimalActions.deleteAnimalFailure({ error })))
          )
        )
      );
  });
}