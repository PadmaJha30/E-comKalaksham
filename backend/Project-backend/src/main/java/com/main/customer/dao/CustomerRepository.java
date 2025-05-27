package com.main.customer.dao;

import com.main.customer.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
//
//@Repository
//public interface CustomerRepository extends JpaRepository<Customer, Long> {
//    
//    // Find customer by email (for login & validation)
//    Optional<Customer> findByEmail(String email);
//    
//    // Find customer by phone number
//    Optional<Customer> findByContact(String contact);
//
//	Optional<Customer> findById(Long id);
//
//	void deleteById(Long id);
//	
//	
//}



@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    // Find customer by email (for login & validation)
   // Optional<Customer> findByEmail(String email);
	Customer findByEmail(String email);
    // Find customer by contact number
    Optional<Customer> findByContact(String contact);

    // Find customer by ID (already provided by JpaRepository, but this is fine)
    Optional<Customer> findById(Long id);
    
    // Delete customer by ID
    void deleteById(Long id);
}