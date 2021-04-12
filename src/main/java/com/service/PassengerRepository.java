package com.service;

import java.math.BigInteger;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.model.Passenger;
import com.model.User;

@Repository
public interface PassengerRepository extends JpaRepository<Passenger,BigInteger> {

//	@Query(" from Passenger where Passenger.user_id= NULL")
//	List<Passenger> getAllByuser_id(User userId);



}
