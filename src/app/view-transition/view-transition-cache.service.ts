import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ViewTransitionCacheService {
  private readonly cache = new Map<string, HTMLElement>();

  set(id: string, element: HTMLElement) {
    this.cache.set(id, element);
  }

  has(id: string): boolean {
    return this.cache.has(id);
  }

  get(id: string): HTMLElement {
    return this.cache.get(id)!;
  }
}
