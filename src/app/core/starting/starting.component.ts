import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '@muruna-app/services';
import { CORE_ROUTING } from '@muruna-app/shared';

@Component({
  selector: 'muruna-starting',
  templateUrl: './starting.component.html',
  styleUrls: ['./starting.component.scss'],
})
export class StartingComponent {
  constructor(private router: Router, private httpService: HttpService) {}

  public async navigateToMainPage(): Promise<void> {
    await this.httpService.syncMoviesAndSendToLocalStorage();
    this.router.navigate([CORE_ROUTING.DEFAULT + '/' + CORE_ROUTING.MAIN_PAGE]);
  }
}
