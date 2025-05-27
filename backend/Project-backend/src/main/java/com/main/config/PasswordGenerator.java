package com.main.config;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordGenerator {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String hashedPassword = encoder.encode("yourpassword"); // Replace with your actual password
        System.out.println("Hashed Password: " + hashedPassword);
    }
}
