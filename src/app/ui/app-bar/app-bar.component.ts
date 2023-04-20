import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {faAdd} from '@fortawesome/free-solid-svg-icons/faAdd';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {IconButtonComponent} from '../icon-button/icon-button.component';
import {IconBarsComponent} from '../icons/components/icon-bars.component';
import {IconComponent} from '../icons/icon.component';
import {RippleDirective} from '../ripple/ripple.directive';

@Component({
  selector: 'labs-app-bar',
  standalone: true,
  imports: [CommonModule, IconBarsComponent, IconButtonComponent, IconComponent, RouterLink, RippleDirective],
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent {
  bars = faBars;
  search = faSearch;
  add = faAdd;
  private readonly router = inject(Router);

  async nav(segments: string[]) {
    document.body.classList.add('special');
    await this.router.navigate(segments);
    document.body.classList.remove('special');
  }
}
