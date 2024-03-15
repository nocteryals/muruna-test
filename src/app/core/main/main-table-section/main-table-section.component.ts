import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie, TableEmitter } from '@muruna-app/shared';

@Component({
  selector: 'muruna-main-table-section',
  templateUrl: './main-table-section.component.html',
  styleUrls: ['./main-table-section.component.scss'],
})
export class MainTableSectionComponent {
  public displayedColumns: string[];
  @Input() public dataSource: Movie[];
  @Output() eventName = new EventEmitter<TableEmitter>();

  constructor() {
    this.displayedColumns = ['id', 'title', 'popularity', 'action'];
    this.dataSource = [];
  }
}
