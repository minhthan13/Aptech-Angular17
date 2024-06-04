import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { Demo15Component } from './app/Components/demo15/demo15.component';

const bootstrap = () => bootstrapApplication(Demo15Component, config);

export default bootstrap;
