import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-showadmin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './showadmin.component.html',
  styleUrl: './showadmin.component.scss'
})
export class ShowadminComponent  {
  lista_admin: any[] = [];
  constructor(private http: ConsultaService, private router: Router) {}

  ngOnInit() {
    this.getUser();
  }


  getUser(){
    this.http.consult_get('/admin/usuariosa').subscribe({
      next: (data: any) => {
        if(data.status){
          for(const ut of data.data){
            const usuariot = {
              nombre: ut.nombre,
              apellido: ut.apellido,
              usuario: ut.usuario,
              correo: ut.correo,
              password: ut.password,
              foto: "Foto",
            };
            this.lista_admin.push(usuariot);
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

  eliminarUsuario(usuario: any){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que deseas eliminar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.http.consult_post('/admin/deleteuser', {usuario}).subscribe({
          next: (data: any) => {
            if (data.status) {
              this.lista_admin = this.lista_admin.filter((usuario) => usuario.id !== usuario.id);
              this.getUser();
              Swal.fire('Usuario eliminado', 'Usuario eliminado correctamente', 'success');
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
