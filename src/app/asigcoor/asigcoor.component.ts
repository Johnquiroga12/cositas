import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-asigcoor',
  templateUrl: './asigcoor.component.html',
  styleUrls: ['./asigcoor.component.css'
  ],
})
export class AsigcoorComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
