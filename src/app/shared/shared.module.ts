import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';


const sharedComponents = [ ];
   

@NgModule({
    imports: [
      CommonModule , 
      FormsModule,
      ReactiveFormsModule,
      MaterialModule
    ],
    declarations: [  ...sharedComponents ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule, 
      MaterialModule,
      ...sharedComponents
    ],
    providers: [
      { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
      { provide: MAT_DATE_LOCALE,  useValue: 'en-US'}
    ],
    entryComponents: [],
  })
export class SharedModule {}