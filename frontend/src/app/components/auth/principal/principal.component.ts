import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
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
