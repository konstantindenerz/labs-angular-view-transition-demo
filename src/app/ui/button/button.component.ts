import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {ComponentStyle} from '../../shared/component-style';
import {RippleDirective} from '../ripple/ripple.directive';

@Component({
  selector: 'labs-button',
  standalone: true,
  imports: [CommonModule, RippleDirective],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[class.type-text]': 'type === "text"',
    '[class.type-outlined]': 'type === "outlined"',
    '[class.type-filled]': 'type === "filled"',
    '[class.type-elevated]': 'type === "elevated"',
  }
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() type: ComponentStyle = 'text';
}
