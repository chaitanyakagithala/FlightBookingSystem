package com.flightmanagement;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import com.model.Flights;
import com.model.Passenger;
import com.model.User;
import com.service.FlightsRepository;
import com.service.FlightsService;
import com.service.PassengerRepository;
import com.service.PassengerService;
import com.service.UserRepository;
import com.service.UserService;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class FlightmanagementApplicationTests {

	@InjectMocks
	UserService userService;

	@InjectMocks
	FlightsService flightsService;
	
	@InjectMocks
	PassengerService passengerService;
	
	@Mock
	FlightsRepository flightsRepository;
	
	@Mock
	UserRepository userRepository;
	
	@Mock
	PassengerRepository passengerRepository;

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void createUserTest() {
		User user = new User(1, "bhavya@gmail.com", "bhavya@123", "bhavya", "1234567891");
		Mockito.when(userRepository.save(user)).thenReturn(user);
		Assertions.assertEquals(user, userService.createUser(user));
		
	}
	
	@Test
	void getByUserEmailAndPassword() {
		String email= "bhavya@gmail.com";
		String password ="bhavya@123";
		User user = new User(1, "bhavya@gmail.com", "bhavya@123", "bhavya", "1234567891");
		Mockito.when(userRepository.findByuserEmailAndPassword(email,password)).thenReturn(Optional.of(user));
		Assertions.assertEquals(user, userService.getByUserEmailAndPassword(email, password));
	}

	@Test
	void addFlightTest() {
	    Flights flights = new Flights(1, "15-04-21 15:40", "15-04-21 15:30");
	    flightsService.addFlight(flights);
		Mockito.verify(flightsRepository, Mockito.times(1)).save(flights);
		
	}
	
    @Test
	void deleteByFlightNumberTest() {
		Integer flightNumber = 5;
        Flights flights = new Flights(1, "15-04-21 15:40", "15-04-21 15:30");
	    flightsService.deleteflight(flightNumber);
		Mockito.verify(flightsRepository, Mockito.times(1)).deleteByflight_number(flightNumber);
		
	}
    
    @Test
    void updateTest() {
	    Flights flights = new Flights(1, "15-04-21 15:40", "15-04-21 15:30");
	    flightsService.update(flights);
		Mockito.verify(flightsRepository, Mockito.times(1)).save(flights);
    }
    
    @Test
	void getAllFlightsTest() {
		Mockito.when(flightsRepository.findAll())
				.thenReturn(Stream
						.of(new Flights(1, "15-04-21 15:40", "15-04-21 15:30"),
								new Flights(2, "15-04-21 15:40", "15-04-21 15:30"))
						.collect(Collectors.toList()));
		Assertions.assertEquals(2, flightsService.getAllFlights().size());
	}

    @Test
	void bookTicketTest() {
    	 
         BigInteger pnrNumber= BigInteger.valueOf(10);
      	Flights flight =new Flights(1234);
      	User user=new User(5);
    	
	    Passenger passenger = new Passenger(pnrNumber,"bhavya","123456788",flight,user);
	    passengerService.bookTicket(passenger);
		Mockito.verify(passengerRepository, Mockito.times(1)).save(passenger);
		
	}
	
    @Test
	void deleteBookingTest() {
       BigInteger pnrNumber= BigInteger.valueOf(10);
    	passengerService.deleteBooking(pnrNumber);
		Mockito.verify(passengerRepository, Mockito.times(1)).deleteBypnr_number(pnrNumber);
		
	}
    
    @Test
   	void bookHistoryTest() {
         BigInteger pnrNumber= BigInteger.valueOf(10);
      	Flights flight =new Flights(1234);
      	User user= new User(5);
    	List<Passenger> passengers=Arrays.asList(
                new Passenger(pnrNumber,"bhavya","123456788",flight,user),
                new Passenger(pnrNumber,"bhavya","123456788",flight,user));
   		Mockito.when(passengerRepository.findAllByuser_id(5))
   				.thenReturn(Optional.of(passengers));
   		Assertions.assertEquals(2, passengerService.bookHistory(5).size());
   	}

    
	
}