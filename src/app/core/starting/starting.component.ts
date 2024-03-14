import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'muruna-starting',
  templateUrl: './starting.component.html',
  styleUrls: ['./starting.component.scss'],
})
export class StartingComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.translate.use('es');
    }, 4000);
  }
}
