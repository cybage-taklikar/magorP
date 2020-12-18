import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const allmodules = [
  MatFormFieldModule,
  CommonModule,
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatMenuModule,
  MatDialogModule,
  MatInputModule,
  MatTooltipModule,
  BrowserModule,
  MatTableModule,
  MatSortModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatStepperModule,
];
@NgModule({
  declarations: [],
  imports: allmodules,
  exports: allmodules,
})
export class MaterialModule {}
