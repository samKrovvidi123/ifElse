import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { TopBarModule } from './top-bar/top-bar.module';
import { CardModule } from './main-content/top-section/card/card.module';
import { TopSectionModule } from './main-content/top-section/top-section.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MiddleSectionModule } from './main-content/middle-section/middle-section.module';
import { BottomSectionModule } from './main-content/bottom-section/bottom-section.module';
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    TopBarModule,
    CardModule,
    TopSectionModule,
    HttpClientModule,
    MiddleSectionModule,
    BottomSectionModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
