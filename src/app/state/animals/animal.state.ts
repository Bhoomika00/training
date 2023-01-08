import { Ianimal } from 'src/app/animals/animal.service';
import * as AppState from '../../state/app.state';


export interface State extends AppState.State {
  animals: AnimalState;
}
export interface AnimalState{
  currentAnimalId:number | null;
  animals:Ianimal[];
  error:string;
}

export const initialState:AnimalState={
    currentAnimalId:null,
  animals:[],
  error:''
}