import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { GoogleChartsModule } from 'angular-google-charts';

import { LineChartComponent } from './components/line-chart/line-chart.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Main1Component } from './components/main1/main1.component';
import { Main2Component } from './components/main2/main2.component';
import { Main3Component } from './components/main3/main3.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogindialogComponent } from './components/logindialog/logindialog.component';
import { MaterialModule } from './shared/material.module';
import { RegisterdialogComponent } from './components/registerdialog/registerdialog.component';
import { UserComponent } from './components/user/user.component';
import { MyBarChartComponent } from './components/my-bar-chart/my-bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { TableChartComponent } from './components/table-chart/table-chart.component';
import { AdminComponent } from './components/admin/admin.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { UserSidenavComponent } from './components/userDashBoard/user-sidenav/user-sidenav.component';
import { UserFavouriteComponent } from './components/userDashBoard/user-favourite/user-favourite.component';
import { UsergameComponent } from './components/userDashBoard/usergame/usergame.component';
import { UserquizComponent } from './components/userDashBoard/userquiz/userquiz.component';
import { RockpapersissorsComponent } from './components/game/rockpapersissors/rockpapersissors.component';
import { HerosectionComponent } from './components/herosection/herosection.component';
import { GamesectionComponent } from './components/gamesection/gamesection.component';
import { HomeComponent } from './components/home/home.component';
import { CheckloginComponent } from './components/checklogin/checklogin.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Main1Component,
    Main2Component,
    Main3Component,
    FooterComponent,
    LogindialogComponent,
    RegisterdialogComponent,
    UserComponent,
    MyBarChartComponent,
    LineChartComponent,
    PieChartComponent,
    TableChartComponent,
    AdminComponent,
    UserSidenavComponent,
    UserFavouriteComponent,
    UsergameComponent,
    UserquizComponent,
    RockpapersissorsComponent,
    HerosectionComponent,
    GamesectionComponent,
    HomeComponent,
    CheckloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,

    ReactiveFormsModule,
    FormsModule,

    GoogleChartsModule,
    FlexLayoutModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
