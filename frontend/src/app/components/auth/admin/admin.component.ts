import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  constructor(private router: Router) { }
  
  navigatecv(){
    this.router.navigate(['crearvuelo']);
  }
  navigateca(){
    this.router.navigate(['crearauto']);
  }
  navigatecr(){
    this.router.navigate(['crearrecepcion']);
  }
  navigatect(){
    this.router.navigate(['crearturista']);
  }
  navigatecau(){
    this.router.navigate(['crearadmin']);
  }
  navigateShowAuto(){
    this.router.navigate(['showauto']);
  }
  navigateShowVuelo(){
    this.router.navigate(['showvuelo']);
  }
  navigateShowRecepcion(){
    this.router.navigate(['showrecepcion']);
  }
  navigateShowTurista(){
    this.router.navigate(['showturista']);
  }
  navigateShowAdmin(){
    this.router.navigate(['showadmin']);
  }
  navigateInicio() {
    alert("Hasta Pronto Administrador")
    this.router.navigate(['']);
  }

}
