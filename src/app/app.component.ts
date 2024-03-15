import { Component } from '@angular/core';
import { LANGUAGES } from '@muruna-app/shared';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(LANGUAGES.en);
    this.translate.addLangs([LANGUAGES.es]);
    this.translate.use(LANGUAGES.en)
  }
}
