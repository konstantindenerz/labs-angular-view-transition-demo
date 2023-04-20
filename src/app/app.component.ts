import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AppBarComponent} from './ui/app-bar/app-bar.component';

@Component({
  selector: 'labs-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, RouterLink, AppBarComponent],
})
export class AppComponent {
  constructor() {
  }
}
