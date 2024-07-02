import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-principal1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './principal1.component.html',
  styleUrl: './principal1.component.scss'
})
export class Principal1Component {
  
  lista_vuelos: any[] = [];
  constructor(private http: ConsultaService, private router: Router) {}

  ngOnInit() {
    this.getVuelos();
  }

  getVuelos(){
    this.http.consult_get('/admin/showvuelos').subscribe({
      next: (data: any) => {
        if(data.status){
          for(const viaje of data.data){
            const vuelo = {
              agencia: viaje.agencia,
              placa: viaje.placa,
              origen: viaje.origen,
              destino: viaje.destino,
              dias: viaje.dias,
              precio: viaje.precio,
            };
            this.lista_vuelos.push(vuelo);
          }
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
  }
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
