import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/paciente';
import { Persona } from 'src/app/persona';
import { HttpSvcService } from 'src/app/http-svc.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  paciente: Paciente;
  duenios: Array<Persona>;
  nombreDuenio: string;
  apellidoDuenio: string;
  telefonoDuenio: string;
  selected;

  profileForm = this.fb.group({
    nombrePaciente: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), Validators.minLength(2)]],
    especie: ['', Validators.required],
    sexo: ['', Validators.required],
    duenio: ['', Validators.required]
  })

  updatePaciente() {
    let nombre = this.profileForm.get("nombrePaciente").value;
    let especie = this.profileForm.get("especie").value;
    let sexo = this.profileForm.get("sexo").value;
    let duenio = this.selected;

    this.paciente.nombre = nombre;
    this.paciente.especie = especie;
    this.paciente.sexo = sexo;
    this.paciente.duenio = duenio;    

    this.service.updatePaciente(this.paciente.id, this.paciente)
    .subscribe((p: Paciente) => {
      this.paciente = p;
      this.profileForm.reset();
    });
    console.warn(this.profileForm.value);
  }

  constructor(private activatedRoute: ActivatedRoute, private service: HttpSvcService, private fb:FormBuilder) {
    
    this.activatedRoute.params.subscribe(params => {
      this.service.getPaciente(params['id'])
        .subscribe((p: Paciente) => {
          this.paciente = p;
          this.nombreDuenio = this.paciente.duenio.nombre;
          this.apellidoDuenio = this.paciente.duenio.apellido;
          this.telefonoDuenio = this.paciente.duenio.telefono;
        })
    })
    console.log(this.paciente);
  }

  ngOnInit() {
    this.service.getAllDuenios().subscribe((dueniosArr: Array<Persona>) => {
      this.duenios = dueniosArr;
    })
  }

}
