import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {Project} from '../../model/project.interface';
import {ProjectCardComponent} from '../../project/project-card/project-card.component';
import {ProjectPreviewComponent} from '../../project/project-preview/project-preview.component';
import {DataService} from '../../shared/data-service';
import {RippleDirective} from '../../ui/ripple/ripple.directive';

@Component({
  selector: 'labs-profile',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RippleDirective, ProjectCardComponent, ProjectPreviewComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  projects: Project[] = inject(DataService).data;
}
