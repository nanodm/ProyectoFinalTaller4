import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpSvcService } from 'src/app/http-svc.service';
import { Paciente } from 'src/app/paciente';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  pacientes: Array<Paciente>;
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private service: HttpSvcService) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params => {      
      this.termino = params['termino'];

      this.service.buscarPacientes( params['termino'] )
      .subscribe((pac: Array<Paciente>) => {
        this.pacientes = pac;
      })      
      console.log(this.pacientes);
    })
  }

}