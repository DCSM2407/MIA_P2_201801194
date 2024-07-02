import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reservaauto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './reservaauto.component.html',
  styleUrl: './reservaauto.component.scss'
})
export class ReservaautoComponent implements OnInit{
  private receivedData = '';
  usr: string = '';
  lista_autos: any[] = [];
  constructor(private http: ConsultaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAutos();
    this.receivedData = this.route.snapshot.paramMap.get('data') ?? '';
    this.usr = this.receivedData;
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

  createReserva(usuario: any, agencia: any, marca: any, modelo: any, precio: any, estado: any){
    usuario = this.receivedData;
    const reserva = {usuario, agencia, marca, modelo, precio, estado};
    this.http.consult_post('/admin/reservacar', reserva).subscribe({
      next: (data: any) => {
        if(data.status){
          Swal.fire({
            title: 'Reserva realizada',
            text: 'La reserva se ha realizado con éxito',
            icon: 'success',
            confirmButtonText: 'Aceptar',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['turista', { data : this.receivedData}]);
            }
          })
        }else{
          Swal.fire({
            title: 'Error al realizar la reserva',
            text: data.msg,
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
          console.error(data);
        }
      },
      error: (error: any) => {
        alert(error.error.msg);
        console.error(error);
      },
    });

  }

  getUser(user: any){
    this.http.consult_get('/admin/userdata').subscribe({
      next: (data: any) => {
        if(data.status){
          return data.data;
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
