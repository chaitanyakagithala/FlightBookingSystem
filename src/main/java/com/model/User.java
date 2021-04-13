package com.model;

import java.util.ArrayList;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table
public class User {
	
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id 
	private int userId;
	@Column(unique=true)
	private String userEmail;
	private String password;
    private String name;
	private String phoneNumber;
	
//	@OneToMany(mappedBy="user",cascade=CascadeType.ALL)
//	List<Flights> flights = new ArrayList<Flights>(); 

	@OneToMany(mappedBy="user",fetch=FetchType.EAGER,cascade=CascadeType.ALL)
    List<Passenger> passengers = new ArrayList<Passenger>(); 
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public User(int userId, String userEmail, String password, String name, String phoneNumber, List<Flights> flights,
			List<Passenger> passengers) {
		super();
		this.userId = userId;
		this.userEmail = userEmail;
		this.password = password;
		this.name = name;
		this.phoneNumber = phoneNumber;
		//this.flights = flights;
		this.passengers = passengers;
	}


	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
//	public List<Flights> getFlights() {
//		return flights;
//	}
//	public void setFlights(List<Flights> flights) {
//		this.flights = flights;
//	}
	public List<Passenger> getPassengers() {
		return passengers;
	}
	public void setPassengers(List<Passenger> passengers) {
		this.passengers = passengers;
	}


//	@Override
//	public String toString() {
//		return "User [userId=" + userId + ", userEmail=" + userEmail + ", password=" + password + ", name=" + name
//				+ ", phoneNumber=" + phoneNumber + ", flights=" + flights + ", passengers=" + passengers + "]";
//	}

	

}
