import { Component, Input } from '@angular/core';

@Component({
  selector: 'tots-square-in-bits-loading',
  templateUrl: './square-in-bits-loading.component.html',
  styleUrls: ['./square-in-bits-loading.component.scss']
})
export class SquareInBitsLoadingComponent {
  @Input() isFullPage: boolean = false;
  @Input() bgColor: string = "transparent";
}
