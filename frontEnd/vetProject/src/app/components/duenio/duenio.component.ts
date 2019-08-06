import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/persona';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpSvcService } from 'src/app/http-svc.service';

@Component({
  selector: 'app-duenio',
  templateUrl: './duenio.component.html',
  styleUrls: ['./duenio.component.css']
})
export class DuenioComponent implements OnInit {

  cliente: Persona;

  profileForm = this.fb.group({    
    nombre: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), Validators.minLength(3)]],
    telefono: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]]
  })

  updateCliente() {
    let nombre = this.profileForm.get("nombre").value;
    let apellido = this.profileForm.get("apellido").value;
    let telefono = this.profileForm.get("telefono").value;

    this.cliente.nombre = nombre;
    this.cliente.apellido = apellido;
    this.cliente.telefono = telefono;

    this.service.updateCliente(this.cliente.id, this.cliente.nombre, this.cliente.apellido, this.cliente.telefono)
    .subscribe((c: Persona) => {
      this.cliente = c;
      this.profileForm.reset();
    });
    console.warn(this.profileForm.value);
  }

  constructor(private activatedRoute: ActivatedRoute, private service: HttpSvcService, private fb:FormBuilder) {

    this.activatedRoute.params.subscribe(params => {
      this.service.getDuenio(params['id'])
      .subscribe((c: Persona) => {
        this.cliente = c;
      })
    })
    console.log(this.cliente);
  }

  ngOnInit() {
  }

}