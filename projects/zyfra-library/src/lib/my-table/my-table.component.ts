import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Header, Data } from './my-table.model';

@Component({
  selector: 'lib-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class MyTableComponent {
  @Input() header: Header[] = [];
  @Input() data: Data[] = [];
  @Output() cellClick: EventEmitter<CellClickEvent> = new EventEmitter<CellClickEvent>();
  @Output() columnClick: EventEmitter<string> = new EventEmitter<string>();

  onCellClick(row: Data, headerTitle: string): void {
    this.cellClick.emit({ row, headerTitle });
  }

  onColumnClick(headerTitle: string): void {
    this.columnClick.emit(headerTitle);
  }
}

interface CellClickEvent {
  row: Data;
  headerTitle: string;
}
