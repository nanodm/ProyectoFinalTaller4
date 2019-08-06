import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpSvcService } from 'src/app/http-svc.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Paciente } from 'src/app/paciente';
import { Persona } from 'src/app/persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  duenios: Array<Persona>;
  selected;

  @Output() actualizar = new EventEmitter<Paciente>();

  profileForm = this.fb.group({
    nombrePaciente: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), Validators.minLength(2)]],
    especie: ['', Validators.required],
    sexo: ['', Validators.required],
    duenio: ['', Validators.required]
  })

  submitPaciente() {
    let nombrePaciente = this.profileForm.get("nombrePaciente").value;
    let especie = this.profileForm.get("especie").value;
    let sexo = this.profileForm.get("sexo").value;

    let duenio = this.selected;
    let paciente = new Paciente(nombrePaciente, especie, sexo, duenio);

    this.service.createPaciente(paciente)
    .subscribe((p: Paciente) => {
      this.actualizar.emit(paciente);
      this.profileForm.reset();
    });
    console.warn(this.profileForm.value);
  }

  constructor(private service:HttpSvcService, private fb:FormBuilder) { }

  ngOnInit() {

    // Se inicia el componente y cargo los dueños ya existentes
    this.service.getAllDuenios().subscribe((dueniosArr: Array<Persona>) => {
      this.duenios = dueniosArr;
    })
  }

}
