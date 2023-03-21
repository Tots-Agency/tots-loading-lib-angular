/** Angular */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/** Loadings */
import { SquareInBitsLoadingComponent } from './loadings/square-in-bits-loading/square-in-bits-loading.component';

/** Components */
import { LoadingFactoryComponent } from './components/loading-factory/loading-factory.component';



@NgModule({
  declarations: [
    /** Loadings */
    SquareInBitsLoadingComponent,

    /** Components */
    LoadingFactoryComponent
  ],
  imports: [
    /** Angular */
    CommonModule,
  ],
  exports: [
    /** Loadings */
    SquareInBitsLoadingComponent,

    /** Components */
    LoadingFactoryComponent
  ]
})
export class TotsLoadingModule { }
