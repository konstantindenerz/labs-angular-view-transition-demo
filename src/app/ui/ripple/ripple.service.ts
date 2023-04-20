import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {WindowService} from '../../shared/window.service';

export interface CreateRippleEvent {
  x: number;
  y: number;
  startFromCenter: boolean;
  container: HTMLElement;
}

export interface RippleSizeAndPosition {
  left: string;
  top: string;
  width: string;
  height: string;
}

@Injectable({providedIn: 'root'})
export class RippleService {
  constructor(@Inject(DOCUMENT) private readonly document: Document, private readonly windowService: WindowService) {
  }

  create(event: CreateRippleEvent): void {
    const {container} = event;
    const ripple = this.document.createElement('div');
    ripple.classList.add('labs-ripple-effect');
    (container.shadowRoot || container).appendChild(ripple);
    const sizeAndPosition = this.calcSizeAndPosition(event);
    Object.assign(ripple.style, sizeAndPosition);
    ripple.addEventListener('animationend', () => (container.shadowRoot || container).removeChild(ripple), {passive: true});
    this.windowService.nativeWindow.requestAnimationFrame(() => {
      ripple.classList.add('labs-ripple-active');
    })
  }

  private calcSizeAndPosition(event: CreateRippleEvent): RippleSizeAndPosition {
    const {width, height} = event.container.getBoundingClientRect();
    const x = event.startFromCenter ? width / 2 : event.x;
    const y = event.startFromCenter ? height / 2 : event.y;
    const factor = event.startFromCenter ? 1.2 : 1;

    const radius = this.calcFurthestDistance(x, y, width, height) * factor;
    const diameter = radius * 2;

    return {
      width: `${diameter}px`,
      height: `${diameter}px`,
      top: `${y - radius}px`,
      left: `${x - radius}px`,
    };
  }

  private calcFurthestDistance(x: number, y: number, width: number, height: number): number {
    return Math.max(
      Math.hypot(x, y),
      Math.hypot(x, height - y),
      Math.hypot(width - x, y),
      Math.hypot(width - x, height - y),
    );
  }
}
