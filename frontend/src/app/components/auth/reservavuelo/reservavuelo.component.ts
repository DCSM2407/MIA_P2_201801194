import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservavuelo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './reservavuelo.component.html',
  styleUrl: './reservavuelo.component.scss'
})
export class ReservavueloComponent implements OnInit{
  private receivedData = '';
  usr: string = '';
  lista_vuelos: any[] = [];
  constructor(private http: ConsultaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getVuelos();
    this.receivedData = this.route.snapshot.paramMap.get('data') ?? '';
    this.usr = this.receivedData;
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

  createReserva(usuario: any, agencia: any, origen: any, destino: any, dias: any, precio:any, estado: any){
    usuario = this.receivedData;
    const reserva = {usuario, agencia, origen, destino, dias, precio, estado};
    this.http.consult_post('/admin/reservavuelo', reserva).subscribe({
      next: (data: any) => {
        if(data.status){
          Swal.fire({
            title: 'Reserva realizada con éxito',
            icon: 'success',
            confirmButtonText: `Aceptar`,
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['turista', { data : this.receivedData}]);
            }
          
          })
        }else{
          Swal.fire({
            title: 'Error al realizar reserva',
            icon: 'error',
            confirmButtonText: `Aceptar`,
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['turista', { data : this.receivedData}]);
            }
          
          })
          console.error(data);
        }
      },
      error: (error: any) => {
        alert(error.error.msg);
        console.error(error);
      },
    });

  }

  

  navigateVuelos() {
    this.router.navigate(['reservavuelo', { data : this.receivedData}]);
  }

  navigateAutos() {
    this.router.navigate(['reservaauto', { data : this.receivedData}]);
  }

  
  navigateReservaAuto() {
    this.router.navigate(['showreservaat', { data : this.receivedData}]);
  }

  navigateReservaVuelo() {
    this.router.navigate(['showreservavt', { data : this.receivedData}]);
  }


  navigateInicio(){
    Swal.fire({
      title: '¿Desea cerrar sesión?',
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['']);
      } else if (result.isDenied) {
        Swal.fire('Operación cancelada', '', 'info');
      }
    });
  }


}
