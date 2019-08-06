import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Paciente } from 'src/app/paciente';
import { Persona } from 'src/app/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpSvcService {
  
  // pacientes: Array<Paciente> = new Array();

  constructor(private http:HttpClient) { }

  configUrl = 'http://localhost:8080/pacientes/';
  searchUrl = 'http://localhost:8080/pacientes/buscar/';
  dueniosUrl = 'http://localhost:8080/personas/';

  // POST
  createPaciente(paciente: Paciente): Observable<Paciente> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };    
    return this.http.post<Paciente>(this.configUrl, paciente, httpOptions);
  }

  createDuenio(duenio: Persona): Observable<Persona> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.post<Persona>(this.dueniosUrl, duenio, httpOptions)
  }

  // GET
  getPaciente(id: number) {
    const url = `${this.configUrl}${id}`;
    return this.http.get(url);
  }

  getAllPacientes() {
    return this.http.get(this.configUrl); // retorna un Observable
  }

  getDuenio(id: number) {
    const url = `${this.dueniosUrl}${id}`;
    return this.http.get(url);
  }

  getAllDuenios() {
    return this.http.get(this.dueniosUrl);
  }

  buscarPacientes(termino: string) {
    const url = `${this.searchUrl}${termino}`
    return this.http.get(url);
  }

  // DELETE
  deletePaciente(id: number) {
    const url = `${this.configUrl}${id}`;
    return this.http.delete(url);
  }

  deleteCliente(id: number) {
    const url = `${this.dueniosUrl}${id}`;
    return this.http.delete(url);
  }

  deleteAllPacientes() {
    return this.http.delete(this.configUrl);
  }

  deleteAllDuenios() {
    return this.http.delete(this.dueniosUrl);
  }

  // PUT
  updatePaciente(id: number, paciente: Paciente) {
    const url = `${this.configUrl}${id}`;
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };
    
    return this.http.put(url, paciente, httpOptions);
  }

  updateCliente(id: number, nombre: string, apellido: string, telefono: string) {
    const url= `${this.dueniosUrl}${id}`;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.put(url, {nombre, apellido, telefono}, httpOptions)
  }  
}