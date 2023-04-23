import {CommonModule} from '@angular/common';
import {Component, ElementRef, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ViewTransitionCacheService} from '../../view-transition/view-transition-cache.service';

export const videoFactory = (id: string) => `
<video muted autoplay loop src="assets/${id}.mp4?v2"></video>
`;

@Component({
  selector: 'labs-project-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss'],
})
export class ProjectPreviewComponent implements OnChanges {
  @Input({required: true}) id = '';
  private readonly cache = inject(ViewTransitionCacheService);
  private readonly elementRef = inject(ElementRef);

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    const {nativeElement} = this.elementRef;
    if (this.cache.has(this.id)) {
      const video = this.cache.get(this.id) as HTMLVideoElement;
      await video.play();
      nativeElement.append(video);
    } else {
      nativeElement.innerHTML = videoFactory(this.id);
      const element = nativeElement.children[0] as HTMLElement;
      this.elementRef.nativeElement.appendChild(element);
      this.cache.set(this.id, element);
    }
  }
}
