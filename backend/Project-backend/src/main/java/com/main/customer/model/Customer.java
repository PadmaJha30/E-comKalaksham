package com.main.customer.model;

import javax.persistence.*;
//
//@Entity
//@Table(name = "customers")
//public class Customer {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//    
//    private String name;
//    private String email;
//    private String contact;
//    private String address;
//    private String sex;
//    private String city;
//    private String state;
//    private String password;
//
//    // Constructors
//    public Customer() {}
//
//    public Customer(String name, String email, String contact, String address,String sex, String city, String state, String password) {
//        this.name = name;
//        this.email = email;
//        this.contact = contact;
//        this.address = address;
//        this.sex=sex;
//        this.city = city;
//        this.state = state;
//        this.password = password;
//    }
//
//    // Getters and Setters
//    public Long getId() { return id; }
//    public void setId(Long id) { this.id = id; }
//
//    public String getName() { return name; }
//    public void setName(String name) { this.name = name; }
//
//    public String getEmail() { return email; }
//    public void setEmail(String email) { this.email = email; }
//
//    public String getContact() { return contact; }
//    public void setContact(String contact) { this.contact = contact; }
//
//    public String getAddress() { return address; }
//    public void setAddress(String address) { this.address = address; }
//
//    public String getSex() { return sex; }
//    public void setSex(String sex) { this.sex = sex; }
//    
//    public String getCity() { return city; }
//    public void setCity(String city) { this.city = city; }
//
//    public String getState() { return state; }
//    public void setState(String state) { this.state = state; }
//
//    public String getPassword() { return password; }
//    public void setPassword(String password) { this.password = password; }
//}





@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String contact;
    private String address;
    private String sex;
    private String city;
    private String state;
    private String password;

    public Customer() {}

    public Customer(String name, String email, String contact, String address, String sex, String city, String state, String password) {
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.address = address;
        this.sex = sex;
        this.city = city;
        this.state = state;
        this.password = password;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getContact() { return contact; }
    public void setContact(String contact) { this.contact = contact; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getSex() { return sex; }
    public void setSex(String sex) { this.sex = sex; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}