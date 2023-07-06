import { NgModule } from '@angular/core';
import { ZyfraLibraryComponent } from './zyfra-library.component';
import { MatTableModule } from '@angular/material/table';

import { MyTableComponent } from './my-table/my-table.component';



@NgModule({
  declarations: [
    ZyfraLibraryComponent,
    MyTableComponent
  ],
  imports: [MatTableModule
  ],
  exports: [
    ZyfraLibraryComponent
  ]
})
export class ZyfraLibraryModule { }
