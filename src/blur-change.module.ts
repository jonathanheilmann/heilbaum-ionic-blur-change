import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { BlurChangeDirective } from "./directives/blur-change";

@NgModule({
    declarations: [
        BlurChangeDirective
    ],
    exports: [
        BlurChangeDirective
    ],
    imports: [
        IonicModule
    ],
})
export class BlurChangeModule {}