import { Routes } from '@angular/router';

import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/authentication/login/login.component';
import { RegisterComponent } from './Pages/authentication/register/register.component';
import { BlankComponent } from './layouts/blank/blank.component';


export const routes: Routes = [

    {
        path: '',
        component: BlankComponent,
        children: [
          {
            path: 'authentication',
            loadChildren: () =>
              import('./Pages/authentication/authentication.routes').then(
                (m) => m.AuthenticationRoutes
              ),
          },
        ],
    }
    ,
    { 
        path: '', 
        component: AppComponent, // Asegura que SOLO lo cargue si está autenticado
        children: [
            { path: 'dashboard', component: DashboardComponent }
        ]
    }

];

