package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Flights;

@Service
public class FlightsService {

	@Autowired
	FlightsRepository flightsRepository;
	
	public void addFlight(Flights flights) {
		flightsRepository.save(flights);
	}

	public List<Flights> getAllFlights() {
		List<Flights> flights= flightsRepository.findAll();
		return flights ;
	}

	public void update(Flights flight) {

		flightsRepository.save(flight);
	}

	public void deleteflight(Flights flight) {

		flightsRepository.delete(flight);
	}

}
