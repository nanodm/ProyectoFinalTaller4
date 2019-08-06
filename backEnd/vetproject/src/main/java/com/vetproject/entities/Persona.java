package com.vetproject.entities;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Persona {
	private String nombre;
	private String apellido;
	private String telefono;
	private String sexo;
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Integer id;
	
	public Persona() {};
	
	public Persona(String nombre, String apellido, String telefono, String sexo) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefono = telefono;
		this.sexo = sexo;
	}
	
	public Integer getId() {
		return id;
	}
	
	public String getNombre() {
		return nombre;
	}	
	
	public String getApellido() {
		return apellido;
	}	

	public String getTelefono() {
		return telefono;
	}
	
	public String getSexo() {
		return sexo;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
		
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
}
