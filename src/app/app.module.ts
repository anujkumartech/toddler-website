import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select'; 
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumbersComponent } from './numbers/numbers.component';
import { AlphabetsComponent } from './alphabets/alphabets.component';
import { NavComponent } from './nav/nav.component';
import { ShapeComponent } from './shape/shape.component';
import { MathComponent } from './math/math.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    AlphabetsComponent,
    NavComponent,
    ShapeComponent,
    MathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
