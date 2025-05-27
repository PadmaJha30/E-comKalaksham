package com.main.customer.service;

import com.main.customer.dao.CustomerRepository;
import com.main.customer.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
//
//@Service
//public class CustomerService {
//    
//    @Autowired
//    private CustomerRepository customerRepository;
//
//    // Get all customers
//    public List<Customer> getAllCustomers() {
//        return customerRepository.findAll();
//    }
//
//    // Get customer by ID
//    public Optional<Customer> getCustomerById(Long id) {
//        return customerRepository.findById(id);
//    }
//
//    // Register a new customer
//    public Customer saveCustomer(Customer customer) {
//        return customerRepository.save(customer);
//    }
//    public Customer findByEmail(String email) {
//        Optional<Customer> customer = customerRepository.findByEmail(email);
//        return customer.orElse(null);  // ✅ Return customer or null if not found
//    }
//    
//    // Update customer details
//    public Optional<Customer> updateCustomer(Long id, Customer updatedCustomer) {
//        return customerRepository.findById(id).map(existingCustomer -> {
//            existingCustomer.setName(updatedCustomer.getName());
//            existingCustomer.setEmail(updatedCustomer.getEmail());
//            existingCustomer.setContact(updatedCustomer.getContact());
//            existingCustomer.setAddress(updatedCustomer.getAddress());
//            existingCustomer.setSex(updatedCustomer.getSex());
//            
//            existingCustomer.setCity(updatedCustomer.getCity());
//            existingCustomer.setState(updatedCustomer.getState());
//            existingCustomer.setPassword(updatedCustomer.getPassword());
//            return customerRepository.save(existingCustomer);
//        });
//    }
//
//    // Delete customer
//    public void deleteCustomer(Long id) {
//        customerRepository.deleteById(id);
//    }
//    
////    public Optional<Customer> findByEmail(String email) {
////        return customerRepository.findByEmail(email);
////    }
//}






@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;
   


    // Get all customers
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    // Get customer by ID
    public Optional<Customer> getCustomerById(Long id) {
        return customerRepository.findById(id);
    }

    // Register a new customer
    public Customer saveCustomer(Customer customer) {
    	//new added
//    	 BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//    	    customer.setPassword(encoder.encode(customer.getPassword()));
    	// Check if customer with same email already exists
        Customer existing = customerRepository.findByEmail(customer.getEmail());
        if (existing != null) {
            throw new IllegalArgumentException("Email already registered");
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        customer.setPassword(encoder.encode(customer.getPassword()));
    	  //end new added
        return customerRepository.save(customer);
    }

    // Find customer by email (for login)
    public Customer findByEmail(String email) {
        Optional<Customer> customer = Optional.ofNullable(customerRepository.findByEmail(email));
        return customer.orElse(null);  // Return customer or null if not found
    }

    // Update customer details
    public Optional<Customer> updateCustomer(Long id, Customer updatedCustomer) {
        return customerRepository.findById(id).map(existingCustomer -> {
            existingCustomer.setName(updatedCustomer.getName());
            existingCustomer.setEmail(updatedCustomer.getEmail());
            existingCustomer.setContact(updatedCustomer.getContact());
            existingCustomer.setAddress(updatedCustomer.getAddress());
            existingCustomer.setSex(updatedCustomer.getSex());
            existingCustomer.setCity(updatedCustomer.getCity());
            existingCustomer.setState(updatedCustomer.getState());
            existingCustomer.setPassword(updatedCustomer.getPassword());
            return customerRepository.save(existingCustomer);
        });
    }

    // Delete customer
    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }
}