import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsultaService } from '../../../services/consulta.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-turista',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './turista.component.html',
  styleUrl: './turista.component.scss'
})
export class TuristaComponent implements OnInit{
  private receivedData = '';
  usr: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.receivedData = this.route.snapshot.paramMap.get('data') ?? '';
    this.usr = this.receivedData;
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
