import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Demo15Component } from './app/Components/demo15/demo15.component';

bootstrapApplication(Demo15Component, appConfig).catch((err) =>
  console.error(err)
);
