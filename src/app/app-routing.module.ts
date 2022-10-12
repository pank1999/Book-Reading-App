import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MALGUDIDAYSComponent } from './components/malgudi-days/malgudi-days.component';
import { TheGUIDEComponent } from './components/the-guide/the-guide.component';
import { UNTOUCHABLEComponent } from './components/untouchable/untouchable.component';


const routes: Routes = [
  { path:"TheGuide" , component : TheGUIDEComponent },
  { path:"MALGUDI-DAYS" , component : MALGUDIDAYSComponent },
  { path:"UNTOUCHABLE" , component:UNTOUCHABLEComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
