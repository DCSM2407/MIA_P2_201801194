import { Routes } from '@angular/router';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PrincipalComponent } from './components/auth/principal/principal.component';
import { Principal1Component } from './components/auth/principal1/principal1.component';
import { Principal2Component } from './components/auth/principal2/principal2.component';

export const routes: Routes = [
    {
        path: '', component: PrincipalComponent
    },
    {
        path: 'vuelos', component: Principal1Component
    },
    {
        path: 'renta', component: Principal2Component
    },
    {
        path: 'registro', component: RegistroComponent
    },
    {
        path: 'login', component: LoginComponent
    }
];
