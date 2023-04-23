import {CommonModule} from '@angular/common';
import {Component, ElementRef, inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import {faPlay} from '@fortawesome/free-solid-svg-icons/faPlay';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {Project} from '../../model/project.interface';
import {ProjectPreviewComponent} from '../../project/project-preview/project-preview.component';
import {DataService} from '../../shared/data-service';
import {ButtonComponent} from '../../ui/button/button.component';
import {IconButtonComponent} from '../../ui/icon-button/icon-button.component';
import {IconComponent} from '../../ui/icons/icon.component';

@Component({
  selector: 'labs-detail',
  standalone: true,
  imports: [CommonModule, IconButtonComponent, ButtonComponent, IconComponent, ProjectPreviewComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  back = faTimes;
  heart = faHeart;
  more = faEllipsisVertical;
  check = faCheck;
  play = faPlay;
  private readonly router = inject(Router);
  public readonly activatedRoute = inject(ActivatedRoute);
  private readonly elementRef = inject(ElementRef);
  private readonly dataService = inject(DataService);
  public project?: Project;
  @Input() id = '';

  navigate() {
    void this.router.navigateByUrl(`/konstantindenerz/editor/${this.id}`);
  }

  navigateBack() {
    this.elementRef.nativeElement.classList.add('full-page-transition')
    void this.router.navigateByUrl('/konstantindenerz');
  }

  ngOnInit(): void {
    this.project = this.dataService.data.find(item => item.id === this.id)
  }
}
