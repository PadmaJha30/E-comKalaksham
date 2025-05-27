package com.main.seller.service;

import com.main.seller.dao.SellerRepository;
import com.main.seller.model.Seller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    //  Save a new seller (password should already be hashed before calling this method)
    public Seller saveSeller(Seller seller) {
        seller.setPassword(passwordEncoder.encode(seller.getPassword())); // Hash password
        return sellerRepository.save(seller);
    }

    // Get all sellers
    public List<Seller> getAllSellers() {
        return sellerRepository.findAll();
    }

    // Get seller by ID
    public Optional<Seller> getSellerById(Long sid) {
        return sellerRepository.findBySid(sid);
    }

    // Update a seller
    @Transactional
    public Optional<Seller> updateSeller(Long sid, Seller updatedSeller) {
        return sellerRepository.findBySid(sid).map(existingSeller -> {
            existingSeller.setName(updatedSeller.getName());
            existingSeller.setEmail(updatedSeller.getEmail());
            existingSeller.setContact(updatedSeller.getContact());
            existingSeller.setAddress(updatedSeller.getAddress());
            existingSeller.setCity(updatedSeller.getCity());
            existingSeller.setState(updatedSeller.getState());
            existingSeller.setSex(updatedSeller.getSex());
            existingSeller.setAadhaarNo(updatedSeller.getAadhaarNo());
            existingSeller.setUdidNumber(updatedSeller.getUdidNumber());
            existingSeller.setAccountNo(updatedSeller.getAccountNo());
            existingSeller.setIfscCode(updatedSeller.getIfscCode());

            // Update password only if a new one is provided
            if (updatedSeller.getPassword() != null && !updatedSeller.getPassword().isEmpty()) {
                existingSeller.setPassword(passwordEncoder.encode(updatedSeller.getPassword()));
            }

            existingSeller.setAadhaarPdf(updatedSeller.getAadhaarPdf());
            existingSeller.setUdidPdf(updatedSeller.getUdidPdf());
            existingSeller.setBankPassbookPdf(updatedSeller.getBankPassbookPdf());

            return sellerRepository.save(existingSeller);
        });
    }

    //  Delete a seller
    @Transactional
    public void deleteSeller(Long sid) {
        sellerRepository.deleteBySid(sid);
    }

    // Find seller by email
    public Optional<Seller> findByEmail(String email) {
        return sellerRepository.findByEmail(email);
    }

    // Authenticate seller credentials
    public boolean authenticateSeller(String email, String rawPassword) {
        Optional<Seller> seller = sellerRepository.findByEmail(email); // Fetch seller by email

        if (seller.isPresent()) {
            String storedPassword = seller.get().getPassword(); //  Hashed password from DB
            if (passwordEncoder.matches(rawPassword, storedPassword)) { // Compare with entered password
                return true; //Authentication successful
            }
        }
        return false; //  Authentication failed
    }

    // Validate password (ensure null safety)
    public boolean isPasswordValid(String rawPassword, String encodedPassword) {
        if (rawPassword == null || encodedPassword == null) {
            return false;
        }
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }
}