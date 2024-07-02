import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-crearvuelo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './crearvuelo.component.html',
  styleUrl: './crearvuelo.component.scss'
})
export class CrearvueloComponent implements OnInit{
  private receivedData = '';
  usr: string = '';
  
  constructor(private route: ActivatedRoute, private http: ConsultaService, private router: Router) {}

  ngOnInit() {
    this.receivedData = this.route.snapshot.paramMap.get('data') ?? '';
    this.usr = this.receivedData;
  }


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