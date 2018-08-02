import { Injectable } from '@angular/core';
import {DataClass} from './data-class';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  jsonObject:DataClass;

  constructor() { }
}
