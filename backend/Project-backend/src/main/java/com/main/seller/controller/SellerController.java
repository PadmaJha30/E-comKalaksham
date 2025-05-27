package com.main.seller.controller;

import com.main.seller.model.Seller;
import com.main.seller.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@RestController
@RequestMapping("/api/seller")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend access
public class SellerController {

    @Autowired
    private SellerService sellerService;

    //  REGISTER SELLER (password will be handled inside the service layer)
    @PostMapping("/register")
    public ResponseEntity<String> registerSeller(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("contact") String contact,
            @RequestParam("address") String address,
            @RequestParam("city") String city,
            @RequestParam("state") String state,
            @RequestParam("sex") String sex,
            @RequestParam("aadhaarNo") String aadhaarNo,
            @RequestParam("udidNumber") String udidNumber,
            @RequestParam("accountNo") String accountNo,
            @RequestParam("ifscCode") String ifscCode,
            @RequestParam("password") String password,
            @RequestParam("aadhaarPdf") MultipartFile aadhaarPdf,
            @RequestParam("udidPdf") MultipartFile udidPdf,
            @RequestParam("bankPassbookPdf") MultipartFile bankPassbookPdf) {

        try {
            // Create and save seller directly
            Seller seller = new Seller(name, email, contact, address, city, state, udidNumber, aadhaarNo, 
                                       Seller.Sex.valueOf(sex.toUpperCase()), accountNo, ifscCode, 
                                       password, "aadhaar.pdf", "udid.pdf", "passbook.pdf");
            
            sellerService.saveSeller(seller);
            return ResponseEntity.ok("Seller registered successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Server error: " + e.getMessage());
        }
    }

    //  GET ALL SELLERS
    @GetMapping
    public List<Seller> getAllSellers() {
        return sellerService.getAllSellers();
    }

    //  GET SINGLE SELLER BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Seller> getSellerById(@PathVariable Long id) {
        Optional<Seller> seller = sellerService.getSellerById(id);
        return seller.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //  UPDATE SELLER DETAILS
    @PutMapping("/{id}")
    public ResponseEntity<Seller> updateSeller(
            @PathVariable Long id,
            @RequestBody Seller updatedSeller) {
        Optional<Seller> seller = sellerService.updateSeller(id, updatedSeller);
        return seller.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // DELETE A SELLER
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSeller(@PathVariable Long id) {
        sellerService.deleteSeller(id);
        return ResponseEntity.ok("Seller deleted successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginSeller(@RequestBody Map<String, String> loginRequest) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");

        Optional<Seller> seller = sellerService.findByEmail(email);
        if (!seller.isPresent()) {
        	//HttpStatus.UNAUTHORIZED (401)
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("error", "Invalid email"));
        }

        if (!sellerService.isPasswordValid(password, seller.get().getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("error", "Invalid password"));
        }

        Map<String, Object> response = new HashMap<>();
        response.put("sellerId", seller.get().getSid());
        response.put("message", "Login Successful!");
        return ResponseEntity.ok(response);
    }
}