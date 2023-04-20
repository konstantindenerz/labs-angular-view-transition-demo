import {Component} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {Icon} from '../icon';

@Component({
  selector: 'labs-icon-bar',
  templateUrl: '../icon.component.html',
  styleUrls: ['../icon.component.scss'],
  imports: [FontAwesomeModule],
  standalone: true,
})
export class IconBarsComponent implements Icon {
  readonly icon = faBars;
}
