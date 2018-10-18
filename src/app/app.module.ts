import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { ScoreComponent } from './score/score.component';
import { UltimatenessComponent } from './ultimateness/ultimateness.component';



@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    UltimatenessComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    AngularFontAwesomeModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
