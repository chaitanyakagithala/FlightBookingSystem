package com.model;

import java.math.BigInteger;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class Passenger {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private BigInteger pnrNumber;
	private String passengerName;
	private String phoneNumber;
	
	@ManyToOne
	@JoinColumn(name="flight_number")
	Flights flight;

	@ManyToOne
	@JoinColumn(name="user_id")
	User user;

	public Passenger() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public Passenger(BigInteger pnrNumber, String passengerName, String phoneNumber, Flights flight, User user) {
		super();
		this.pnrNumber = pnrNumber;
		this.passengerName = passengerName;
		this.phoneNumber = phoneNumber;
		this.flight = flight;
		this.user = user;
	}


	public BigInteger getPnrNumber() {
		return pnrNumber;
	}

	public void setPnrNumber(BigInteger pnrNumber) {
		this.pnrNumber = pnrNumber;
	}

	public String getPassengerName() {
		return passengerName;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public int getUser() {
		return this.user.getUserId();
	}

	public void setUser(User user) {
		this.user = user;
	}


	public int getFlight() {
		return this.flight.getFlightNumber();
	}


	public void setFlight(Flights flight) {
		this.flight = flight;
	}


	@Override
	public String toString() {
		return "Passenger [pnrNumber=" + pnrNumber + ", passengerName=" + passengerName + ", phoneNumber=" + phoneNumber
				+ ", flight=" + flight + ", user=" + user + "]";
	}

	
	

}
