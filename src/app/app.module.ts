import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { SvgCircleModule, SvgLineModule, SvgPolygonModule, SvgPolylineModule, SvgTextModule, SvgPathModule, SvgEllipseModule } from 'angular-svg';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    AngularFontAwesomeModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    SvgCircleModule,
    SvgLineModule, 
    SvgPolygonModule,
    SvgPolylineModule, 
    SvgTextModule, 
    SvgPathModule, 
    SvgEllipseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
