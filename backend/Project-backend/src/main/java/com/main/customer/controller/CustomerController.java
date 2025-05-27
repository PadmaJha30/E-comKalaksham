package com.main.customer.controller;

import com.main.customer.dto.LoginRequest;
import com.main.customer.dto.LoginResponse;
import com.main.customer.model.Customer;
import com.main.customer.service.CustomerService;

//import java.util.HashMap;
import java.util.List;
//import java.util.Map;
import java.util.Optional;

import org.springframework.dao.DataIntegrityViolationException;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend access
@RestController
@RequestMapping("/api/customers")
public class CustomerController {

	private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final CustomerService customerService;
    
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    // Customer Login
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
//        System.out.println("Login request for email: " + loginRequest.getEmail());
//
//        Customer customer = customerService.findByEmail(loginRequest.getEmail());
//
////        if (customer == null || !customer.getPassword().equals(loginRequest.getPassword())) {
////            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
////        }
//        
//        if (customer == null || !passwordEncoder.matches(loginRequest.getPassword(), customer.getPassword())) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
//        }
//
//
//        // In real apps, return JWT instead of dummy token
//        String token = "dummy-token-" + customer.getId();
//        return ResponseEntity.ok(new LoginResponse(token, customer.getId()));
//    }

    
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Customer customer = customerService.findByEmail(loginRequest.getEmail());

        if (customer == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        if (!encoder.matches(loginRequest.getPassword(), customer.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }

        String token = "dummy-token-" + customer.getId();
        return ResponseEntity.ok(new LoginResponse(token, customer.getId()));
    }

//    @PostMapping("/login")
//    public ResponseEntity<?> loginCustomer(@RequestBody LoginRequest loginRequest) {
//        Customer customer = customerService.findByEmail(loginRequest.getEmail());
//
//        if (customer == null) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Customer not found");
//        }
//
//        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//        if (!encoder.matches(loginRequest.getPassword(), customer.getPassword())) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
//        }
//
//        // If successful
//        return ResponseEntity.ok("Login successful");
//    }
//
//    
//    
//    
    
    // Get all customers
    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    //  Get customer by ID
    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
        Optional<Customer> customer = customerService.getCustomerById(id);
        return customer.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

//    //  Register new customer
//    @PostMapping("/register")
//    public Customer registerCustomer(@RequestBody Customer customer) {
//        return customerService.saveCustomer(customer);
//    }
    
    @PostMapping("/register")
    public ResponseEntity<?> registerCustomer(@RequestBody Customer customer) {
        try {
            Customer savedCustomer = customerService.saveCustomer(customer);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedCustomer);
        } catch (DataIntegrityViolationException e) {
            // Log the exception (e.g., for duplicate email errors)
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Data integrity violation: " + e.getMessage());
        } catch (Exception e) {
            // Catch any other generic exception
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while registering customer");
        }
    }

    
    

    // Update customer
    @PutMapping("/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Long id, @RequestBody Customer updatedCustomer) {
        Optional<Customer> customer = customerService.updateCustomer(id, updatedCustomer);
        return customer.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete customer
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomer(id);
        return ResponseEntity.ok("Customer deleted successfully");
    }
}