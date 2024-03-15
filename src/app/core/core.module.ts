import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { StartingComponent } from './starting/starting.component';
import { MainComponent } from './main/main.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ServicesModule } from '@muruna-app/services';
import { MainTableSectionComponent } from './main/main-table-section/main-table-section.component';
import { MainCruSectionComponent } from './main/main-cru-section/main-cru-section.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    StartingComponent,
    MainComponent,
    MainTableSectionComponent,
    MainCruSectionComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    TranslateModule,
    MatButtonModule,
    MatTableModule,
    ServicesModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatInputModule,
  ],
})
export class CoreModule {}
