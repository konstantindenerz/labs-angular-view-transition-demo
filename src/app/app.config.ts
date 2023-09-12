import {ApplicationConfig} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter, withComponentInputBinding, withHashLocation, withViewTransitions } from '@angular/router';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation(), withComponentInputBinding(), withViewTransitions()), provideAnimations()],
};
