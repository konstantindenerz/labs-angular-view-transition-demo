import {Component, Input} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {Icon} from './icon';
import {ICON_PLACEHOLDER} from './icon-placeholder';

@Component({
  selector: 'labs-icon',
  templateUrl: 'icon.component.html',
  styleUrls: ['icon.component.scss'],
  imports: [FontAwesomeModule],
  standalone: true,
})
export class IconComponent implements Icon {
  @Input() icon: IconDefinition = ICON_PLACEHOLDER;
}
