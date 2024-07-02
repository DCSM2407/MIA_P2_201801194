import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-showvuelo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './showvuelo.component.html',
  styleUrl: './showvuelo.component.scss'
})
export class ShowvueloComponent implements OnInit{
    lista_vuelos: any[] = [];
    private receivedData = '';
    usr: string = '';
    
    constructor(private route: ActivatedRoute, private http: ConsultaService, private router: Router) {}
  
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
    this.router.navigate(['crearvuelo',{ data : this.receivedData}]);
  }
  navigateca(){
    this.router.navigate(['crearauto',{ data : this.receivedData}]);
  }
  navigatecr(){
    this.router.navigate(['crearrecepcion',{ data : this.receivedData}]);
  }
  navigatect(){
    this.router.navigate(['crearturista',{ data : this.receivedData}]);
  }
  navigatecau(){
    this.router.navigate(['crearadmin',{ data : this.receivedData}]);
  }
  navigateShowAuto(){
    this.router.navigate(['showauto',{ data : this.receivedData}]);
  }
  navigateShowVuelo(){
    this.router.navigate(['showvuelo',{ data : this.receivedData}]);
  }
  navigateShowRecepcion(){
    this.router.navigate(['showrecepcion',{ data : this.receivedData}]);
  }
  navigateShowTurista(){
    this.router.navigate(['showturista',{ data : this.receivedData}]);
  }
  navigateShowAdmin(){
    this.router.navigate(['showadmin',{ data : this.receivedData}]);
  }
  navigatereservac(){
    this.router.navigate(['showhistorialc',{ data : this.receivedData}]);
  }
  navigatereservav(){
    this.router.navigate(['showhistorialv',{ data : this.receivedData}]);
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