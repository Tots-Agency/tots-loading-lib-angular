import { Component, Input } from '@angular/core';

@Component({
  selector: 'tots-loading-factory',
  templateUrl: './loading-factory.component.html',
  styleUrls: ['./loading-factory.component.css']
})
export class LoadingFactoryComponent {
  @Input() isFullPage: boolean = false;
  @Input() color: string = "#80bc00";
  @Input() type: string = "square-in-bits";
}
