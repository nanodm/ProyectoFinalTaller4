package com.vetproject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vetproject.entities.Persona;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Integer>{

}