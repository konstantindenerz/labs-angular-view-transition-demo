import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {appConfig} from './app/app.config';

// Workaround to avoid this issue: https://bugs.chromium.org/p/chromium/issues/detail?id=1434757
setTimeout(() => {
  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
}, 10);
