/** Angular */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/** Loadings */
import { SquareInBitsLoadingComponent } from './loadings/square-in-bits-loading/square-in-bits-loading.component';



@NgModule({
  declarations: [
    /** Loadings */
    SquareInBitsLoadingComponent
  ],
  imports: [
    /** Angular */
    CommonModule,
  ],
  exports: [
    /** Loadings */
    SquareInBitsLoadingComponent
  ]
})
export class LoadingModule { }
