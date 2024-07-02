import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-principal2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './principal2.component.html',
  styleUrl: './principal2.component.scss'
})
export class Principal2Component {
  lista_autos: any[] = [];
  constructor(private http: ConsultaService, private router: Router) {}

  ngOnInit() {
    this.getAutos();
  }


  getAutos(){
    this.http.consult_get('/admin/showautos').subscribe({
      next: (data: any) => {
        if(data.status){
          for(const car of data.data){
            const carro = {
              agencia: car.agencia,
              marca: car.marca,
              placa: car.placa,
              modelo: car.modelo,
              precio: car.precio,
              ciudad: car.ciudad,
            };
            this.lista_autos.push(carro);
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
