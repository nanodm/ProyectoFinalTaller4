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

import com.vetproject.entities.Persona;
import com.vetproject.services.PersonaService;

@RestController
public class PersonaRestController {
	
	@Autowired
	private PersonaService service;
	
	public PersonaRestController() {};
	
	@CrossOrigin
	@PostMapping("/personas")
	public Persona crearPersona(@RequestBody Persona p) {
		return service.nuevo(p);
	}
	
	@CrossOrigin
	@PutMapping("/personas/{id}")
	public Persona modificarPersona(@PathVariable Integer id, @RequestBody Persona p) {
		return service.modificarPersona(id, p);		
	}
	
	@CrossOrigin
	@GetMapping("/personas/{id}")
	public Persona getPaciente(@PathVariable Integer id) {
		return service.getPersona(id);
	}
	
	@CrossOrigin
	@GetMapping("/personas")
	public List<Persona> obtenerTodos() {
		return service.obtenerTodos();
	}
	
	@CrossOrigin
	@DeleteMapping("/personas/{id}")
	public Persona deletePersona(@PathVariable Integer id) {
		return service.deletePersona(id);
	}
	
	@CrossOrigin
	@DeleteMapping("/personas")
	public void deleteAll() {
		service.deleteAll();
	}

}
