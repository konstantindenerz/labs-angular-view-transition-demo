import {Injectable} from '@angular/core';
import {Project} from '../model/project.interface';

@Injectable({providedIn: 'root'})
export class DataService {
  data: Project[] = [
    {id: 'WNgEqbG', title: 'Animated Retrowave 👾 (CSS)', likes: 420, comments: 42, views: 4200},

    {id: 'qBMvXNK', title: 'Neumorphic Liquid Slider (CSS, Animation)', likes: 420, comments: 42, views: 4200},
    {id: 'xxyZJpO', title: 'CSS - 3D - Sphere - Cubes - Intersection (No JS)', likes: 420, comments: 42, views: 4200},
    {id: 'KKxeWKj', title: '3D Glass Switch (Pure CSS, Neumorphic, Animation)', likes: 420, comments: 42, views: 4200},

    {id: 'XWPpvpg', title: 'Holo Card {CSS, Animation}', likes: 420, comments: 42, views: 4200},
    {
      id: 'yLxpjYz',
      title: 'Flux Capacitor (Animation, CSS) | ⚡️ 1.21 GIGAWATTS! ⚡️',
      likes: 420,
      comments: 42,
      views: 4200
    },
    {id: 'abaXabq', title: 'CSS View Transition - Enterprise (NCC 1701)', likes: 420, comments: 42, views: 4200},

  ];
}
