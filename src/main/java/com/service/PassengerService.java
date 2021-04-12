package com.service;

import java.math.BigInteger;
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

//	public List<Passenger> bookHistory(User userId) {
//          List<Passenger> passengers=passengerRepository.getAllByuser_id(userId);
//		return passengers;
//	}

	public void deleteBooking(BigInteger pnrNumber) {

		passengerRepository.deleteById(pnrNumber);
	}

}
