import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NumbersComponent } from './numbers/numbers.component';
import { AlphabetsComponent } from './alphabets/alphabets.component';

const routes: Routes = [
  { path: 'numbers', component: NumbersComponent },
  { path: 'alphabets', component: AlphabetsComponent },
  { path: '', redirectTo: '/numbers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FlexLayoutModule],
})
export class AppRoutingModule {}
