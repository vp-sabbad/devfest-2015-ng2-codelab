/// <reference path="typings/_custom.d.ts" />

import { Component } from 'angular2/angular2';
import { Toolbar } from './components/toolbar/toolbar';

@Component({
  selector: 'devfest',
  template: '<toolbar></toolbar>' ,
  directives: [ Toolbar ]
})
export class Devfest {}