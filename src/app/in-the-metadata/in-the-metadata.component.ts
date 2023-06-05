import { Component, EventEmitter } from '@angular/core';

//Inputs and outputs defined in decorator here!!!
@Component({
  selector: 'app-in-the-metadata',
  templateUrl: './in-the-metadata.component.html',
  styleUrls: ['./in-the-metadata.component.css'],
  inputs: ['clearanceItem'],
  outputs: ['buyEvent']
})
export class InTheMetadataComponent  {


  buyEvent = new EventEmitter<string>();
  clearanceItem = '';

  buyIt() {
    console.warn('Child says: emitting buyEvent with', this.clearanceItem);
    this.buyEvent.emit(this.clearanceItem);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/