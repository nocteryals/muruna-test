import { Component, OnInit } from '@angular/core';
import { environment } from '@muruna-app/environments';
import { Movie } from '@muruna-app/shared';

@Component({
  selector: 'muruna-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public displayedColumns: string[];
  public dataSource: Movie[];

  constructor() {
    this.displayedColumns = ['id', 'title', 'popularity'];
    this.dataSource = [];
  }
  ngOnInit(): void {
    console.log(environment.fireConfig);
  }
}
