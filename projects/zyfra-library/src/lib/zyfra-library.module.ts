import { NgModule } from '@angular/core';
import { ZyfraLibraryComponent } from './zyfra-library.component';
import { MyTableModule } from './my-table/my-table.module';




@NgModule({
  declarations: [
    ZyfraLibraryComponent,
    
  ],
  imports: [MyTableModule
  ],
  exports: [
    ZyfraLibraryComponent,
    MyTableModule
  ]
})
export class ZyfraLibraryModule { }
