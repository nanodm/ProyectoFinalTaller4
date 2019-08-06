package com.vetproject.services;

import java.util.List;

import com.vetproject.entities.Paciente;

public interface PacienteService {
	public Paciente nuevo(Paciente p);
	public Paciente modificarPaciente(Integer id, Paciente p);
	public Paciente getPaciente(Integer id);
	public List<Paciente> obtenerTodos();
	public Paciente deletePaciente(Integer id);
	public void deleteAll();
	public List<Paciente> buscarPaciente(String nombre);
}