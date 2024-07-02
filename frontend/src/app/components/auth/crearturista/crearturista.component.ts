import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';


@Component({
  selector: 'app-crearturista',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './crearturista.component.html',
  styleUrl: './crearturista.component.scss'
})
export class CrearturistaComponent {
  constructor(private http: ConsultaService, private router: Router) {}

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
