package com.controllers;

import java.math.BigInteger;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Passenger;
import com.model.User;
import com.service.PassengerService;

@RestController
public class PassengerController {

	@Autowired
	PassengerService passengerService;
	
	@PostMapping("/bookTicket")
    public void bookTicket(@RequestBody Passenger passenger) {
		passengerService.bookTicket(passenger);
	}


//	@GetMapping("/bookHistory/{userId}")
//	public List<Passenger> bookHistory(@PathVariable User userId){
//		List<Passenger> passengers = passengerService.bookHistory(userId);
//		return passengers;
//	}
	
	@DeleteMapping("/deleteBooking/{pnrNumber}")
	public void deleteBooking(@PathVariable BigInteger pnrNumber) {
		passengerService.deleteBooking(pnrNumber);
	}
}
