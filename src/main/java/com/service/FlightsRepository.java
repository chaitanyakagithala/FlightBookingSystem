package com.service;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.model.Flights;

@Repository
@Transactional
public interface FlightsRepository extends JpaRepository<Flights,Integer>  {
     
	void deleteByflightNumber(Integer flightNumber);

}
