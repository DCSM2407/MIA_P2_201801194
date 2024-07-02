import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-showrcr',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './showrcr.component.html',
  styleUrl: './showrcr.component.scss'
})
export class ShowrcrComponent implements OnInit{
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
    this.http.consult_get('/admin/showrcr').subscribe({
      next: (data: any) => {
        if(data.status){
          for(const car of data.data){
            const carro = {
              id: car.id,
              usuario: car.usuario,
              agencia: car.agencia,
              marca: car.marca,
              modelo: car.modelo,
              precio: car.precio,
              estado: car.estado,
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

  estadoAceptado(usuario: any){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que deseas aceptar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.http.consult_post('/admin/estado1', {usuario}).subscribe({
          next: (data: any) => {
            if (data.status) {
              Swal.fire('Reservacion Aceptada', 'Reservacion Aceptada correctamente', 'success');
              this.lista_autos = this.lista_autos.filter((placa) => placa.id !== placa.id);
              this.getAutos();
            } else {
              Swal.fire('Error', data.msg, 'error');
              console.error(data);
            }
          },
          error: (error: any) => {
            Swal.fire('Error', "error al aceptar", 'error');
            console.error(error);
          },
        });
        
      }
    });
  }

  estadoRechazado(usuario: any){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que deseas rechazar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, rechazar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.http.consult_post('/admin/estado2', {usuario}).subscribe({
          next: (data: any) => {
            if (data.status) {
              Swal.fire('Reservacion Rechazada', 'Reservacion rechazada correctamente', 'success');
              this.lista_autos = this.lista_autos.filter((placa) => placa.id !== placa.id);
              this.getAutos();
            } else {
              Swal.fire('Error', data.msg, 'error');
              console.error(data);
            }
          },
          error: (error: any) => {
            Swal.fire('Error', "error al rechazar", 'error');
            console.error(error);
          },
        });
        
      }
    });
  }

  eliminarAuto(placa: any){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que deseas eliminar este Auto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.http.consult_post('/admin/deletecarro', {placa}).subscribe({
          next: (data: any) => {
            if (data.status) {
              this.lista_autos = this.lista_autos.filter((placa) => placa.id !== placa.id);
              this.getAutos();
              Swal.fire('Auto eliminado', 'Auto eliminado correctamente', 'success');
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

  navigateShowrcr(){
    this.router.navigate(['showrcr', { data : this.receivedData}]);
  }

  navigateShowrvr(){
    this.router.navigate(['showrvr', { data : this.receivedData}]);
  }
}

