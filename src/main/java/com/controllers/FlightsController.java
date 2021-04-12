package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	public void addFlight(@RequestBody Flights flights) {
		
		flightsService.addFlight(flights);
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
	
	@DeleteMapping("/deleteFlight")
	public void deleteFlight(@RequestBody Flights flight) {
		flightsService.deleteflight(flight);
	}
}
