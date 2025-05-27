package com.main.customer.dto;

//
//public class LoginResponse {
//    private String token;
//    private Long customerId;
//
//    // Constructors
//    public LoginResponse() {}
//
//    public LoginResponse(String token, Long customerId) {
//        this.token = token;
//        this.customerId = customerId;
//    }
//
//    // Getters and Setters
//    public String getToken() {
//        return token;
//    }
//
//    public void setToken(String token) {
//        this.token = token;
//    }
//
//    public Long getCustomerId() {
//        return customerId;
//    }
//
//    public void setCustomerId(Long customerId) {
//        this.customerId = customerId;
//    }
//}
//





public class LoginResponse {
    private String token;
    private Long customerId;

    public LoginResponse() {}

    public LoginResponse(String token, Long customerId) {
        this.token = token;
        this.customerId = customerId;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }
}