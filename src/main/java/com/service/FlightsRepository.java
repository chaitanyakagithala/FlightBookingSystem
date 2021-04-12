package com.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.model.Flights;

@Repository
public interface FlightsRepository extends JpaRepository<Flights,Integer>  {

}
