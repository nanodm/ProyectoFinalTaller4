package com.vetproject.services;

import java.util.List;

import com.vetproject.entities.Persona;

public interface PersonaService {
	
	public Persona nuevo(Persona p);
	public Persona modificarPersona(Integer id, Persona p);
	public Persona getPersona(Integer id);
	public List<Persona> obtenerTodos();
	public Persona deletePersona(Integer id);
	public void deleteAll();

}
