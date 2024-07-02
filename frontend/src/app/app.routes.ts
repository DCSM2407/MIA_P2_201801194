import { Routes } from '@angular/router';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PrincipalComponent } from './components/auth/principal/principal.component';
import { Principal1Component } from './components/auth/principal1/principal1.component';
import { Principal2Component } from './components/auth/principal2/principal2.component';
import { TuristaComponent } from './components/auth/turista/turista.component';
import { AdminComponent } from './components/auth/admin/admin.component';
import { RecepcionComponent } from './components/auth/recepcion/recepcion.component';
import { CrearvueloComponent } from './components/auth/crearvuelo/crearvuelo.component';
import { CrearautoComponent } from './components/auth/crearauto/crearauto.component';
import { CrearrecepcionComponent } from './components/auth/crearrecepcion/crearrecepcion.component';
import { CrearadminComponent } from './components/auth/crearadmin/crearadmin.component';
import { CrearturistaComponent } from './components/auth/crearturista/crearturista.component';
import { ShowadminComponent } from './components/auth/showadmin/showadmin.component';
import { ShowturistaComponent } from './components/auth/showturista/showturista.component';
import { ShowrecepcionComponent } from './components/auth/showrecepcion/showrecepcion.component';
import { ShowautoComponent } from './components/auth/showauto/showauto.component';
import { ShowvueloComponent } from './components/auth/showvuelo/showvuelo.component';
import { ReservaautoComponent } from './components/auth/reservaauto/reservaauto.component';
import { ReservavueloComponent } from './components/auth/reservavuelo/reservavuelo.component';
import { ShowreservaatComponent } from './components/auth/showreservaat/showreservaat.component';
import { ShowreservavtComponent } from './components/auth/showreservavt/showreservavt.component';
import { ShowrcrComponent } from './components/auth/showrcr/showrcr.component';
import { ShowrvrComponent } from './components/auth/showrvr/showrvr.component';

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
    },
    {
        path: 'recepcion', component: RecepcionComponent
    },
    {
        path: 'admin', component: AdminComponent
    },
    {
        path: 'turista', component: TuristaComponent
    },
    {
        path: 'reservaauto', component: ReservaautoComponent
    },
    {
        path: 'reservavuelo', component: ReservavueloComponent
    },
    {
        path: 'showreservaat', component: ShowreservaatComponent
    },
    {
        path: 'showreservavt', component: ShowreservavtComponent
    },
    {
        path: 'showrvr', component: ShowrvrComponent
    },
    {
        path: 'showrcr', component: ShowrcrComponent
    },
    {
        path: 'crearvuelo', component: CrearvueloComponent
    },
    {
        path: 'crearauto', component: CrearautoComponent
    },
    {
        path: 'crearturista', component: CrearturistaComponent
    },
    {
        path: 'crearrecepcion', component: CrearrecepcionComponent
    },
    {
        path: 'crearadmin', component: CrearadminComponent
    },
    {
        path: 'showauto', component: ShowautoComponent
    },
    {
        path: 'showvuelo', component: ShowvueloComponent
    },
    {
        path: 'showadmin', component: ShowadminComponent
    },
    {
        path: 'showrecepcion', component: ShowrecepcionComponent
    },
    {
        path: 'showturista', component: ShowturistaComponent
    }
];
