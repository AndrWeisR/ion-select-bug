import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  form: FormGroup;
  agents = [
    { code: 'A1', desc: 'Agent 1'},
    { code: 'A2', desc: 'Agent 2'},
    { code: 'A3', desc: 'Agent 3'}
  ];

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.form = this.formBuilder.group({
      agent: [''],
    });
  }

}
