/// <reference path="../../typings/_custom.d.ts" />

import { Component } from 'angular2/angular2';
import { FixScrolling } from './fix-scrolling';

@Component({
  selector: 'toolbar',
  templateUrl: 'components/toolbar/toolbar.html',
  directives: [ FixScrolling ]  
})
export class Toolbar {
  
  private title: string = 'Angular 2 Quiz App';
  
  constructor() {
  }
    
}
