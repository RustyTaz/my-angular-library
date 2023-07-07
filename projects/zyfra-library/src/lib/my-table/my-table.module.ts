import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MyTableComponent } from './my-table.component';



@NgModule({
  declarations: [MyTableComponent],
  imports: [
    CommonModule,
    MatTableModule

  ],
  exports:[MyTableComponent]
})
export class MyTableModule { }
