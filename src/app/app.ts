/// <reference path="typings/_custom.d.ts" />

import { Component, ViewEncapsulation } from 'angular2/angular2';
import { RouteConfig, Router, Location } from 'angular2/router';

@Component({
  selector: 'devfest',
  template: '<h1>Hello Nantes :)</h1>' 
})
export class Devfest {
  constructor(router: Router, location: Location) {
    router.navigate(['/Home']);
  }
}