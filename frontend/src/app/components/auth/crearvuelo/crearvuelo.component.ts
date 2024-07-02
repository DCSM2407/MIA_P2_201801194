import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';


@Component({
  selector: 'app-crearvuelo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './crearvuelo.component.html',
  styleUrl: './crearvuelo.component.scss'
})
export class CrearvueloComponent {

  
  constructor(private http: ConsultaService, private router: Router) {}

  form_addVuelo = new FormGroup({
    agencia: new FormControl('', Validators.required),
    placa: new FormControl('', Validators.required),
    origen: new FormControl('', Validators.required),
    destino: new FormControl('', Validators.required),
    dias: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
  });

  addVuelo(){
    if (this.form_addVuelo.valid) {
        this.http.consult_post('/admin/vuelos', this.form_addVuelo.value).subscribe({
          next: (data: any) => {
            if(data.status){
              alert(data.msg);
              
            }else{
              alert(data.msg);
              console.error(data);
            }
          },
          error: (error: any) => {
            alert(error.error.msg);
            console.error(error);
          },
        });
    }else{
      alert("Faltan campos por llenar");
    }
  }

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
