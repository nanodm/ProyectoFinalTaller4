import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpSvcService } from 'src/app/http-svc.service';

@Component({
  selector: 'app-duenios',
  templateUrl: './duenios.component.html',
  styleUrls: ['./duenios.component.css']
})
export class DueniosComponent implements OnInit {

  clientes: Array<Persona>;
  mostrar: boolean;

  profileForm = this.fb.group({    
    nombre: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$'), Validators.minLength(3)]],
    telefono: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]],
    sexo: ['', Validators.required]
  })

  submitCliente() {
    let nombre = this.profileForm.get("nombre").value;
    let apellido = this.profileForm.get("apellido").value;
    let telefono = this.profileForm.get("telefono").value;
    let sexo = this.profileForm.get("sexo").value;

    let cliente = new Persona(nombre, apellido, telefono, sexo);

    this.service.createDuenio(cliente)
    .subscribe((duenio: Persona) => {
      this.clientes.push(cliente);
      this.profileForm.reset();
    });
    console.warn(this.profileForm.value);
  }

  showAllClientes() {
    this.service.getAllDuenios()
    .subscribe((clientes: Array<Persona>) => this.clientes = clientes);
  }

  deleteCliente(id: number) {
    this.service.deleteCliente(id)
    .subscribe(() => {
      let indexOf = 0;
      this.clientes.find((item, index) => {
        if (item.id === id) {        
          indexOf = index;
          return true;
        }
      });
      this.clientes.splice(indexOf, 1);
      console.log(this.clientes);
    });
  }

  deleteAllClientes() {
    this.service.deleteAllDuenios().subscribe();
  }

  constructor(private service:HttpSvcService, private fb:FormBuilder) { }

  mostrarDatos() {
    this.mostrar = true;
  }

  ngOnInit() {
    this.clientes = new Array<Persona>();
  }

}
