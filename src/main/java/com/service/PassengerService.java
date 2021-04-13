package com.service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Passenger;
import com.model.User;

@Service
public class PassengerService {

	@Autowired
	PassengerRepository passengerRepository;
	
	public void bookTicket(Passenger passenger) {
		passengerRepository.save(passenger);
		
	}

	public List<Passenger> bookHistory(Integer userId) {
          List<Passenger> passengers=passengerRepository.findAllByuser_id(userId).orElse(( new ArrayList<Passenger>()) );
		return passengers;
	}

	public void deleteBooking(BigInteger pnrNumber) {

		passengerRepository.deleteBypnr_number(pnrNumber);;
	}

}
