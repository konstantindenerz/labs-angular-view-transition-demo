import {SimpleChange} from '@angular/core';

export type SimpleChanges<T> = {
  [propName in keyof T]: SimpleChange;
}
