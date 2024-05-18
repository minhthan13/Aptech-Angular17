import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { Demo2Component } from './app/Components/demo2/demo2.component';
import { Demo3Component } from './app/Components/demo3/demo3.component';
import { Demo4Component } from './app/Components/demo4/demo4.component';
import { Demo5Component } from './app/Components/demo5/demo5.component';
import { LoginComponent } from './app/Components/login/login.component';
import { Demo6Component } from './app/Components/demo6/demo6.component';
import { Demo7Component } from './app/Components/demo7/demo7.component';
import { Demo8Component } from './app/Components/demo8/demo8.component';
import { CalculateAppComponent } from './app/Components/calculate-app/calculate-app.component';
import { Demo9Component } from './app/Components/demo9/demo9.component';
import { Demo10Component } from './app/Components/demo10/demo10.component';
import { Demo11Component } from './app/Components/demo11/demo11.component';

const bootstrap = () => bootstrapApplication(Demo11Component, config);

export default bootstrap;
