package com.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
//import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class Flights {
	
	@Id
	private int flightNumber;
	private String arrivalTime;
	private String departureTime;
	
//	@OneToOne(mappedBy="flight")
//    Passenger passenger;
//
//	@ManyToOne
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
