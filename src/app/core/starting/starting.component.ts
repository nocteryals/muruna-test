import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_ROUTING } from '@muruna-app/shared';

@Component({
  selector: 'muruna-starting',
  templateUrl: './starting.component.html',
  styleUrls: ['./starting.component.scss'],
})
export class StartingComponent {
  constructor(
    private router: Router
  ) {}

  public navigateToMainPage(): void {
    this.router.navigate([CORE_ROUTING.DEFAULT + '/' + CORE_ROUTING.MAIN_PAGE]);
  }
}
