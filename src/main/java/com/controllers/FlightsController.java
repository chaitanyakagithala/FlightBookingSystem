package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Flights;
import com.service.FlightsService;

@RestController
public class FlightsController {
	
	@Autowired
	FlightsService flightsService;
	
	@PostMapping("/addFlight")
	public ResponseEntity<String> addFlight(@RequestBody Flights flights) {
		
		flightsService.addFlight(flights);
		return new ResponseEntity<String>("Flightadded",HttpStatus.OK);
	}

	@GetMapping("/getAllFlights")
	public List<Flights> getAllFlights(){
		List<Flights> flights=flightsService.getAllFlights();
		return flights;
	}
	
	@PutMapping("/updateByFlightNumber")
	public void updateByFlightNumber(@RequestBody Flights flight) {
		
		flightsService.update(flight);
	}
	
	@DeleteMapping("/deleteFlight/{flightNumber}")
	public ResponseEntity<String> deleteFlight(@PathVariable Integer flightNumber) {
		flightsService.deleteflight(flightNumber);
		return new ResponseEntity<String>("Fight deleted",HttpStatus.OK);
	}
}
