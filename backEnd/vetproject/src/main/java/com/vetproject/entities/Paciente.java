package com.vetproject.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Paciente {
	private String nombre;
	private String especie;
	private String sexo;
	
	@ManyToOne
	private Persona duenio;
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Integer id;
	
	public Paciente() {};
	
	public Paciente(String nombre, String especie, String sexo, Persona duenio) {
		this.nombre = nombre;
		this.especie = especie;
		this.sexo = sexo;
		this.duenio = duenio;		
	}
	
	public Integer getId() {
		return id;
	}

	public String getNombre() {
		return nombre;
	}

	
	public String getEspecie() {
		return especie;
	}
	
	public String getSexo() {
		return sexo;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public void setEspecie(String especie) {
		this.especie = especie;
	}
	
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public Persona getDuenio() {
		return duenio;
	}

	public void setDuenio(Persona duenio) {
		this.duenio = duenio;
	}

}
