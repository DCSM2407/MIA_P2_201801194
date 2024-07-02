import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private http: ConsultaService, private router: Router) {}

  form_login = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login() {
    if (this.form_login.valid) {
      this.http.consult_post('/admin/login', this.form_login.value).subscribe({
        next: (data: any) => {
          if (data.status) {
            if (data.type === 'turista') {
              Swal.fire({
                title: 'Bienvenido Usuario!',
                text: 'Ingresando a la plataforma Turista',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
              });
              this.router.navigate(['turista', { data : this.form_login.value.usuario}]);
            } else if (data.type === 'admin') {
              Swal.fire({
                title: 'Bienvenido Usuario!',
                text: 'Ingresando a la plataforma Administrador',
                icon: 'success',
                showConfirmButton: false,
                timer: 2500
              });
              this.router.navigate(['admin']);
            } else if (data.type === 'recepcion') {

              Swal.fire({
                title: 'Bienvenido Usuario!',
                text: 'Ingresando a la plataforma Recepcionista',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
              });
              this.router.navigate(['recepcion']);
            }
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'Usuario o contraseña incorrectos',
              icon: 'error',
              showConfirmButton: false,
              timer: 2500
            });
            console.error(data);
          }
        },
        error: (error: any) => {
          Swal.fire({
            title: 'Error!',
            text: 'Error en Credenciales o Servidor',
            icon: 'error',
            showConfirmButton: false,
            timer: 2500
          });
          console.error(error);
        },
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Debe completar los campos',
        icon: 'error',
        showConfirmButton: false,
        timer: 2500
    });
    }
  }

  navigateInicio() {
    this.router.navigate(['']);
  }

  navigateRegistro() {
    this.router.navigate(['registro']);
  }
}
