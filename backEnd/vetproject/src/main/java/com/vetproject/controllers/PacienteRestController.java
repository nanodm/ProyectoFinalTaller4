package com.vetproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vetproject.entities.Paciente;
import com.vetproject.services.PacienteService;

@RestController
public class PacienteRestController {

	@Autowired
	private PacienteService service;
	
	public PacienteRestController() {};
	
	@CrossOrigin
	@PostMapping("/pacientes")
	public Paciente crearPaciente(@RequestBody Paciente p) {
		return service.nuevo(p);
	}
	
	@CrossOrigin
	@PutMapping("/pacientes/{id}")
	public Paciente modificarPaciente(@PathVariable Integer id, @RequestBody Paciente p) {
		return service.modificarPaciente(id, p);		
	}
	
	@CrossOrigin
	@GetMapping("/pacientes/{id}")
	public Paciente getPaciente(@PathVariable Integer id) {
		return service.getPaciente(id);
	}
	
	@CrossOrigin
	@GetMapping("/pacientes/buscar/{nombre}")
	public List<Paciente> buscarPaciente(@PathVariable String nombre) {
		return service.buscarPaciente(nombre);
	}
	
	@CrossOrigin
	@GetMapping("/pacientes")
	public List<Paciente> obtenerTodos() {
		return service.obtenerTodos();
	}
	
	@CrossOrigin
	@DeleteMapping("/pacientes/{id}")
	public Paciente deletePaciente(@PathVariable Integer id) {
		return service.deletePaciente(id);
	}
	
	@CrossOrigin
	@DeleteMapping("/pacientes")
	public void deleteAll() {
		service.deleteAll();
	}
}
