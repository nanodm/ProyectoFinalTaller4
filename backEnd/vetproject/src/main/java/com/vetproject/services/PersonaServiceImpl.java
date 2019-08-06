package com.vetproject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vetproject.entities.Persona;
import com.vetproject.repositories.PersonaRepository;

@Service
public class PersonaServiceImpl implements PersonaService {
	
	@Autowired
	private PersonaRepository repo;
	
	public Persona nuevo(Persona p) {
		return repo.save(p);
	}
	
	public Persona modificarPersona(Integer id, Persona p) {
		Persona aux = repo.findById(id).orElse(null);
		if(aux != null) {
			aux.setNombre(p.getNombre());
			aux.setApellido(p.getApellido());
			aux.setTelefono(p.getTelefono());
			repo.save(aux);
		}
		return aux;	
	}
	
	public Persona getPersona(Integer id) {
		return repo.findById(id).orElse(null);		
	}
	
	public List<Persona> obtenerTodos() {
		return repo.findAll();
	}
	
	public Persona deletePersona(Integer id) {
		Persona p = repo.findById(id).orElse(null);
		repo.deleteById(id);
		return p;		
	}
	
	public void deleteAll() {
		repo.deleteAll();		
	}

}
