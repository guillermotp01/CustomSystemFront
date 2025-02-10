import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';


export const routes: Routes = [

    { path: 'login', component:LoginComponent },
    { path: 'register', component:RegisterComponent },
    { path: 'dashboard', component: AppComponent }
];

