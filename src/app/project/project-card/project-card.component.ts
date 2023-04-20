import {CommonModule} from '@angular/common';
import {Component, ElementRef, HostBinding, inject, Input} from '@angular/core';
import {Router} from '@angular/router';
import {faEye, faHeart} from '@fortawesome/free-solid-svg-icons';
import {faMessage} from '@fortawesome/free-solid-svg-icons/faMessage';
import {Project} from '../../model/project.interface';
import {IconComponent} from '../../ui/icons/icon.component';
import {RippleDirective} from '../../ui/ripple/ripple.directive';
import {ProjectPreviewComponent} from '../project-preview/project-preview.component';

@Component({
  selector: 'labs-project-card',
  standalone: true,
  imports: [CommonModule, IconComponent, RippleDirective, ProjectPreviewComponent],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project?: Project;
  @HostBinding('class.first')
  @Input() isFirst = false;

  private readonly router = inject(Router);
  private readonly elementRef = inject(ElementRef);
  heart = faHeart;
  message = faMessage;
  eye = faEye;

  async nav(segments: string[]): Promise<void> {
    this.elementRef.nativeElement.classList.add('active');
    await this.router.navigate(segments);
    this.elementRef.nativeElement.classList.add('active');
  }
}
