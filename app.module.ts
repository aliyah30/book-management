import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component'; 
import { HomeComponent } from './home.component'; 

const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route (login page)
  { path: 'home', component: HomeComponent }, // Home page after login
  { path: '**', redirectTo: '' } // Redirect to login for undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
