package com.vetproject.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.vetproject.entities.Paciente;
import com.vetproject.repositories.PacienteRepository;

@Service
public class PacienteServiceImpl implements PacienteService {
	
	@Autowired
	private PacienteRepository repo;	
	
	public Paciente nuevo(Paciente p) {
		return repo.save(p);
	}
	
	public Paciente modificarPaciente(Integer id, Paciente p) {
		Paciente aux = repo.findById(id).orElse(null);
		if(aux != null) {
			aux.setNombre(p.getNombre());
			aux.setEspecie(p.getEspecie());
			aux.setDuenio(p.getDuenio());
			repo.save(aux);
		}
		return aux;
	}
	
	public Paciente getPaciente(Integer id) {
		return repo.findById(id).orElse(null);
	}
	
	public List<Paciente> obtenerTodos() {
		return repo.findAll();
	}
	
	public Paciente deletePaciente(Integer id) {
		Paciente p = repo.findById(id).orElse(null);
		repo.deleteById(id);
		return p;
	}
	
	public void deleteAll() {
		repo.deleteAll();
	}
	
	public List<Paciente> buscarPaciente(String nombre) {
		return repo.findByNombreContainingIgnoreCase(nombre);
	}

}
