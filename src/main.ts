import './polyfills';

import './styles.styl';

import { svgXHR } from './helpers/utils';

var __sprite__ = { path: './assets/images/svg/**/*.svg', name: 'assets/images/sprite.[hash].svg' }; // tslint:disable-line
svgXHR(__sprite__);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);


