import { Directive, ElementRef, HostListener, EventEmitter, Output } from "@angular/core";

/**
 * BlurChangeDirective
 */
@Directive({
    selector: '[blurChange]'
})
export class BlurChangeDirective {

    @Output() blurChange: EventEmitter<any> = new EventEmitter();

    private valueOnFocus:any = null;

    /**
     * Constructor of class
     *
     * @param element
     */
    constructor(private element:ElementRef) {
    }

    @HostListener('focus')
    public onFocus():void {
        this.valueOnFocus = this.element.nativeElement.firstElementChild.value;
    }

    @HostListener('blur')
    public onBlur():void {
        let valueOnBlur = this.element.nativeElement.firstElementChild.value;

        if (this.valueOnFocus !== valueOnBlur) {
            this.blurChange.emit({
                newValue: valueOnBlur,
                oldValue: this.valueOnFocus
            });
        }

        this.valueOnFocus = null;
    }

}

/**
 * Blur change event type
 */
export type BlurChangeEvent = {
    newValue: any,
    oldValue: any
}
