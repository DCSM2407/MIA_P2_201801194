import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-showauto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './showauto.component.html',
  styleUrl: './showauto.component.scss'
})
export class ShowautoComponent {
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
