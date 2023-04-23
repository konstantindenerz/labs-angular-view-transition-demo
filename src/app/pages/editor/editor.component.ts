import {animate, state, style, transition, trigger} from '@angular/animations';
import {CommonModule} from '@angular/common';
import {Component, inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faCog} from '@fortawesome/free-solid-svg-icons/faCog';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {faSave} from '@fortawesome/free-solid-svg-icons/faSave';
import {Project} from '../../model/project.interface';
import {ProjectPreviewComponent} from '../../project/project-preview/project-preview.component';
import {DataService} from '../../shared/data-service';
import {ButtonComponent} from '../../ui/button/button.component';
import {IconButtonComponent} from '../../ui/icon-button/icon-button.component';
import {IconComponent} from '../../ui/icons/icon.component';

@Component({
  selector: 'labs-editor',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconButtonComponent, IconComponent, ProjectPreviewComponent],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  animations: [trigger('slideFromTop', [
    state(
      '*',
      style({
        transform: `translateY(0)`,
      }),
    ),
    state(
      'void',
      style({
        transform: `translateY(-10%)`,
      }),
    ),
    transition('void <=> *', [animate('.4s linear')]),
  ])]
})
export class EditorComponent implements OnInit {
  back = faArrowLeft;
  cog = faCog;
  more = faEllipsisVertical;
  check = faCheck;
  save = faSave;
  private readonly router = inject(Router);
  public readonly activatedRoute = inject(ActivatedRoute);
  private readonly dataService = inject(DataService);
  public project?: Project;
  @Input() id = '';

  ngOnInit(): void {
    this.project = this.dataService.data.find(item => item.id === this.id)
  }

  navigateBack() {
    void this.router.navigateByUrl(`/konstantindenerz/detail/${(this.activatedRoute.snapshot.params as any).id}`);
  }
}
