import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Page1Component } from  './page1/page1.component';
import { Page2Component } from  './page2/page2.component';
import { Page3Component } from  './page3/page3.component';
import { HomeComponent } from  './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
//'./page1/page1';

/*
import { Page1Component } from './page1/page1';
import { Page2Component } from './page2/page2';
import { Page3Component } from './page3/page3';
*/
//const routes: Routes = [];


const routes: Routes = [
  {path: '', component: Page1Component},
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component},
  {path: 'card', component:  HomeComponent},  
  {path: 'pricing', component:  PricingComponent},  
  {path: '**', redirectTo: ''}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
