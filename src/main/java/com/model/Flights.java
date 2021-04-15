package com.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
//import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table
public class Flights {
	
	@Id
	private int flightNumber;
	private String arrivalTime;
	private String departureTime;
	
   @OneToMany(mappedBy="flight",fetch=FetchType.EAGER,cascade=CascadeType.ALL)
   List<Passenger> passengers = new ArrayList<Passenger>();

//	@ManyToOne(fetch=FetchType.LAZY)
//	@JoinColumn(name="user_id")
//	User user;

	public Flights() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Flights(int flightNumber, String arrivalTime, String departureTime) {
	super();
	this.flightNumber = flightNumber;
	this.arrivalTime = arrivalTime;
	this.departureTime = departureTime;
   }
	
	public Flights(int i) {
		// TODO Auto-generated constructor stub
	}

	public int getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(int flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public String getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}

    @Override
	public String toString() {
		return "Flights [flightNumber=" + flightNumber + ", arrivalTime=" + arrivalTime + ", departureTime="
				+ departureTime + "]";
	}

	
	
	
}
