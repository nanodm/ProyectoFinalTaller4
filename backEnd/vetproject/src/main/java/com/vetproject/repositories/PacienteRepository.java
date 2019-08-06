package com.vetproject.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vetproject.entities.Paciente;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Integer> {

	List<Paciente> findByNombreContainingIgnoreCase(String nombre);

}
