import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';



@NgModule({
  declarations: [CustomModalComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomModalComponent]
})
export class UtilModule { }
