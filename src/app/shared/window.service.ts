import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class WindowService {
  get nativeWindow(): Window {
    return window;
  }
}
