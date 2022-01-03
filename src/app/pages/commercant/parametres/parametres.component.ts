import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss']
})
export class ParametresComponent implements OnInit {

  changePasswordValidForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.changePasswordValidForm = this.fb.group({
      password: [null, Validators.required, Validators.minLength(6)],
      password_confirmation: [null, Validators.required, Validators.minLength(6)]
    });


    this.validateFormAddCB = this.fb.group({
      iban: [null, [Validators.required]],
      bic: [null, [Validators.required]],
      nom: [null, [Validators.required]],
      type: [null, [Validators.required]],
      libelle: [null, [Validators.required]],
    });
  }

  submitCPForm(){
    console.log(this.changePasswordValidForm.value);
    
  }

  validateFormAddCB!: FormGroup;
  
  submitFormAddCB(): void {
    if (this.validateFormAddCB.valid) {
      console.log('submit', this.validateFormAddCB.value);
    } else {
      Object.values(this.validateFormAddCB.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
