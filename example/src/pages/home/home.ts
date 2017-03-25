import { Component } from '@angular/core';
import { BlurChangeEvent } from "@heilbaum/heilbaum-ionic-blur-change";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  protected code: {
    example: string,
    ngModule: string
  } = {
    example: '',
    ngModule: ''
  };

  private someInputHasChanged: boolean = false;
  private anotherInputHasChanged: boolean = false;

  protected someInputMessage: String = 'Focus input to start';
  protected anotherInputMessage: String = 'Focus input to start';

  /**
   * Runs when the page has loaded. This event only happens once per page being created.
   * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
   * The ionViewDidLoad event is good place to put your setup code for the page.
   */
  ionViewDidLoad(): void {
    this.code.example = `<ion-input id="someInput"
           name="someInput"
           placeholder="Some input"
           type="text"
           value="Some input"
           (blurChange)="onBlurChange($event)">
</ion-input>`;
    this.code.ngModule = `@NgModule({
 imports: [
     BlurChangeModule
 ]
})`;
  }

  /**
   * On bur method
   *
   * @param field
   */
  protected onBlur(field: string): void {
    const defaultMessage = 'Focus input to start';

    switch(field) {
      case 'someInput':
        setTimeout(() => {
          if (!this.someInputHasChanged) {
            this.someInputMessage = defaultMessage;
          }
        }, 50);
        break;
      case 'anotherInput':
        setTimeout(() => {
          if (!this.anotherInputHasChanged) {
            this.anotherInputMessage = defaultMessage;
          }
        }, 50);
        break;
    }
  }

  /**
   * On blur change method
   *
   * @param $event
   * @param field
   */
  protected onBlurChange($event: BlurChangeEvent, field: string): void {
    const defaultMessage = 'Focus input to start';

    let message = `Changed from "${$event.oldValue}" to "${$event.newValue}"`;

    switch(field) {
      case 'someInput':
        this.someInputHasChanged = true;
        this.someInputMessage = message;
        setTimeout(() => {
          this.someInputMessage = defaultMessage;
        }, 4000);
        break;
      case 'anotherInput':
        this.anotherInputHasChanged = true;
        this.anotherInputMessage = message;
        setTimeout(() => {
          this.anotherInputMessage = defaultMessage;
        }, 4000);
        break;
    }
  }

  /**
   * On focus input
   *
   * @param field
   */
  protected onFocus(field: string): void {
    const message = 'Blur input to detect if value has changed.';

    switch(field) {
      case 'someInput':
        this.someInputHasChanged = false;
        this.someInputMessage = message;
        break;
      case 'anotherInput':
        this.anotherInputHasChanged = false;
        this.anotherInputMessage = message;
        break;
    }
  }

}
