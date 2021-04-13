package com.service;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.model.Passenger;
import com.model.User;

@Repository
@Transactional

public interface PassengerRepository extends JpaRepository<Passenger,BigInteger> {

	@Query("from Passenger where user_id=:user_id")
  Optional<	List<Passenger>> findAllByuser_id(Integer user_id);
    
	@Modifying
	@Query(value="DELETE FROM Passenger WHERE pnr_number=:pnr_number")
	void deleteBypnr_number(BigInteger pnr_number);












}
