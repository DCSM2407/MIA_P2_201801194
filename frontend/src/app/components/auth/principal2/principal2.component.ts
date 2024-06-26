import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';


@Component({
  selector: 'app-principal2',
  standalone: true,
  imports: [],
  templateUrl: './principal2.component.html',
  styleUrl: './principal2.component.scss'
})
export class Principal2Component {
  constructor(private router: Router) { }
  
  navigateLogin() {
    this.router.navigate(['login']);
  }
  navigateRegistro() {
    this.router.navigate(['registro']);
  }
  navigateInicio() {
    this.router.navigate(['']);
  }
  navigateVuelos() {
    this.router.navigate(['vuelos']);
  }
  navigateRenta() {
    this.router.navigate(['renta']);
  }
}
