import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-showvuelo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './showvuelo.component.html',
  styleUrl: './showvuelo.component.scss'
})
export class ShowvueloComponent {
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

  eliminarVuelo(placa: any){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que deseas eliminar este Auto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.http.consult_post('/admin/deletevuelo', {placa}).subscribe({
          next: (data: any) => {
            if (data.status) {
              this.lista_vuelos = this.lista_vuelos.filter((placa) => placa.id !== placa.id);
              this.getVuelos();
              Swal.fire('Vuelo eliminado', 'Vuelo eliminado correctamente', 'success');
            } else {
              Swal.fire('Error', data.msg, 'error');
              console.error(data);
            }
          },
          error: (error: any) => {
            Swal.fire('Error', "error al eliminar", 'error');
            console.error(error);
          },
        });
        
      }
    });
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

