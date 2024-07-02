import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crearturista',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './crearturista.component.html',
  styleUrl: './crearturista.component.scss'
})
export class CrearturistaComponent implements OnInit{
  private receivedData = '';
  usr: string = '';
  
  constructor(private route: ActivatedRoute, private http: ConsultaService, private router: Router) {}

  ngOnInit() {
    this.receivedData = this.route.snapshot.paramMap.get('data') ?? '';
    this.usr = this.receivedData;
  }

  form_registro = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    usuario: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[.,:;!?(){}[\\]-_\'"ˋ~@#%^&*+=]).{8,}$'
      ),
    ]),
    confirm_password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[.,:;!?(){}[\\]-_\'"ˋ~@#%^&*+=]).{8,}$'
      ),
    ]),
  });
  
  registrar(){
    if (this.form_registro.valid) {
      if (this.form_registro.value.password === this.form_registro.value.confirm_password) {
        this.http.consult_post('/admin/registro', this.form_registro.value).subscribe({
          next: (data: any) => {
            if(data.status){
              alert(data.msg);
              //this.navigateLogin();
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
        alert("Las contraseñas no coinciden");
      }
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