import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpService } from './http/http.service';
import { StorageService } from './storage/storage.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorsService } from './error/error.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, MatSnackBarModule, TranslateModule],
  providers: [HttpService, StorageService, ErrorsService],
})
export class ServicesModule {}
