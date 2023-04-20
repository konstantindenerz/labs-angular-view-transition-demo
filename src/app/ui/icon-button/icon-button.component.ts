import {CommonModule} from '@angular/common';
import {Component, ElementRef, HostBinding, HostListener, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {ICON_PLACEHOLDER} from '../icons/icon-placeholder';
import {IconComponent} from '../icons/icon.component';
import {RippleService} from '../ripple/ripple.service';

@Component({
  selector: 'labs-icon-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  host: {
    '[class.primary]': 'type === "primary"',
    '[class.outlined]': 'outlined === "" || outlined',
  }
})
export class IconButtonComponent {
  @Input() icon: IconDefinition = ICON_PLACEHOLDER;
  @HostBinding('class.disabled')
  @Input() disabled = false;
  @HostBinding('class.has-focus')
  private hasFocus: boolean = false;
  @Input() type: 'default' | 'primary' = 'default';
  @Input() disabledFocus = false;
  @Input() outlined: '' | boolean = false;

  ngOnInit(): void {
  }

  focus() {
    this.hasFocus = true;
  }

  blur() {
    this.hasFocus = false;
  }

  constructor(private readonly elementRef: ElementRef, private readonly rippleService: RippleService,) {
  }

  @HostListener('click', ['$event'])
  create({offsetX, offsetY}: MouseEvent): void {
    if (this.disabled) {
      return;
    }
    this.rippleService.create({
      x: offsetX,
      y: offsetY,
      startFromCenter: true,
      container: this.elementRef.nativeElement
    });
  }
}
