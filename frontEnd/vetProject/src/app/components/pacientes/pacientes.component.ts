import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/paciente';
import { HttpSvcService } from 'src/app/http-svc.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes: Array<Paciente>;
  mostrar: boolean;

  constructor(private service:HttpSvcService) { }

  showPaciente(id:number) {
    this.service.getPaciente(id)
    .subscribe((paciente: Paciente) => {
      this.pacientes = new Array<Paciente>();
      this.pacientes.push(paciente);
      console.log(paciente);
    }, (error) => console.log(error));
  }

  showAllPacientes() {
    this.service.getAllPacientes()
    .subscribe((pacientes: Array<Paciente>) => this.pacientes = pacientes);
  }

  addPaciente(paciente: Paciente) {
    this.pacientes.push(paciente);
    //
    this.showAllPacientes();
  }

  deletePaciente(id: number) {
    this.service.deletePaciente(id)
    .subscribe(() => {
      let indexOf = 0;
      this.pacientes.find((item, index) => {
        if (item.id === id) {        
          indexOf = index;
          return true;
        }
      });
      this.pacientes.splice(indexOf, 1);
      console.log(this.pacientes);
    });
  }

  deleteAllPacientes() {
    this.service.deleteAllPacientes().subscribe();
  }

  mostrarDatos() {
    this.mostrar = true;
  }

  ngOnInit() {
    this.pacientes = new Array<Paciente>();
  }

}
