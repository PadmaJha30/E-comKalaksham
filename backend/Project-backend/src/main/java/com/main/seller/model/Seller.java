//package com.main.seller.model;
//
//import java.util.List;
//import javax.persistence.*;
//import com.main.project.model.Product;
//
//@Entity
//@Table(name = "seller")
//public class Seller {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "SId")
//    private Long sid;  // Primary Key
//
//    @Column(name = "Name", nullable = false, length = 100)
//    private String name;
//
//    @Column(name = "Email", nullable = false, unique = true, length = 100)
//    private String email;
//
//    @Column(name = "Contact", nullable = false, unique = true, length = 20)
//    private String contact;
//
//    @Column(name = "Address", nullable = false)
//    private String address;
//
//    @Column(name = "City", nullable = false, length = 50)
//    private String city;
//
//    @Column(name = "State", nullable = false, length = 50)
//    private String state;
//
//    @Column(name = "UDID_No", nullable = false, unique = true, length = 50)
//    private String udidNumber;
//
//    @Column(name = "Adhar_No", nullable = false, unique = true, length = 50)
//    private String aadhaarNo;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "Sex", nullable = false)
//    private Sex sex;
//
//    @Column(name = "Account_No", nullable = false, unique = true, length = 20)
//    private String accountNo;
//
//    @Column(name = "IFSC_Code", nullable = false, length = 20)
//    private String ifscCode;
//
//    @Column(name = "Password", nullable = false)
//    private String password;
//
//    @Column(name = "Adhar_PDF", nullable = true)
//    private String aadhaarPdf;
//
//    @Column(name = "UDID_PDF", nullable = true)
//    private String udidPdf;
//
//    @Column(name = "Passbook_PDF", nullable = true)
//    private String bankPassbookPdf;
//
//    @OneToMany(mappedBy = "seller", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Product> products;
//
//    public enum Sex {
//        MALE, FEMALE, NOT_SPECIFIED;
//    }
//
//    public Seller() {}
//
//    public Seller(String name, String email, String contact, String address, String city, String state,
//                  String udidNumber, String aadhaarNo, Sex sex, String accountNo, String ifscCode,
//                  String password, String aadhaarPdf, String udidPdf, String bankPassbookPdf) {
//        this.name = name;
//        this.email = email;
//        this.contact = contact;
//        this.address = address;
//        this.city = city;
//        this.state = state;
//        this.udidNumber = udidNumber;
//        this.aadhaarNo = aadhaarNo;
//        this.sex = sex;
//        this.accountNo = accountNo;
//        this.ifscCode = ifscCode;
//        this.password = password;
//        this.aadhaarPdf = aadhaarPdf;
//        this.udidPdf = udidPdf;
//        this.bankPassbookPdf = bankPassbookPdf;
//    }
//
//    public Long getSid() { return sid; }
//    public void setSid(Long sid) { this.sid = sid; }
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
//    public String getCity() { return city; }
//    public void setCity(String city) { this.city = city; }
//
//    public String getState() { return state; }
//    public void setState(String state) { this.state = state; }
//
//    public String getUdidNumber() { return udidNumber; }
//    public void setUdidNumber(String udidNumber) { this.udidNumber = udidNumber; }
//
//    public String getAadhaarNo() { return aadhaarNo; }
//    public void setAadhaarNo(String aadhaarNo) { this.aadhaarNo = aadhaarNo; }
//
//    public Sex getSex() { return sex; }
//    public void setSex(Sex sex) { this.sex = sex; }
//
//    public String getAccountNo() { return accountNo; }
//    public void setAccountNo(String accountNo) { this.accountNo = accountNo; }
//
//    public String getIfscCode() { return ifscCode; }
//    public void setIfscCode(String ifscCode) { this.ifscCode = ifscCode; }
//
//    public String getPassword() { return password; }
//    public void setPassword(String password) { this.password = password; }
//
//    public String getAadhaarPdf() { return aadhaarPdf; }
//    public void setAadhaarPdf(String aadhaarPdf) { this.aadhaarPdf = aadhaarPdf; }
//
//    public String getUdidPdf() { return udidPdf; }
//    public void setUdidPdf(String udidPdf) { this.udidPdf = udidPdf; }
//
//    public String getBankPassbookPdf() { return bankPassbookPdf; }
//    public void setBankPassbookPdf(String bankPassbookPdf) { this.bankPassbookPdf = bankPassbookPdf; }
//
//    public List<Product> getProducts() { return products; }
//    public void setProducts(List<Product> products) { this.products = products; }
//}




package com.main.seller.model;

import java.util.List;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.main.project.model.Product;

@Entity
@Table(name = "seller")
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SId")
    private Long sid;

    @Column(name = "Name", nullable = false, length = 100)
    private String name;

    @Column(name = "Email", nullable = false, unique = true, length = 100)
    private String email;

    @Column(name = "Contact", nullable = false, unique = true, length = 20)
    private String contact;

    @Column(name = "Address", nullable = false)
    private String address;

    @Column(name = "City", nullable = false, length = 50)
    private String city;

    @Column(name = "State", nullable = false, length = 50)
    private String state;

    @Column(name = "UDID_No", nullable = false, unique = true, length = 50)
    private String udidNumber;

    @Column(name = "Adhar_No", nullable = false, unique = true, length = 50)
    private String aadhaarNo;

    @Enumerated(EnumType.STRING)
    @Column(name = "Sex", nullable = false)
    private Sex sex;

    @Column(name = "Account_No", nullable = false, unique = true, length = 20)
    private String accountNo;

    @Column(name = "IFSC_Code", nullable = false, length = 20)
    private String ifscCode;

    @Column(name = "Password", nullable = false)
    private String password;

    @Column(name = "Adhar_PDF", nullable = true)
    private String aadhaarPdf;

    @Column(name = "UDID_PDF", nullable = true)
    private String udidPdf;

    @Column(name = "Passbook_PDF", nullable = true)
    private String bankPassbookPdf;

    @OneToMany(mappedBy = "seller", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private List<Product> products;

    public enum Sex {
        MALE, FEMALE, NOT_SPECIFIED;
    }

    public Seller() {}

    public Seller(String name, String email, String contact, String address, String city, String state,
                  String udidNumber, String aadhaarNo, Sex sex, String accountNo, String ifscCode,
                  String password, String aadhaarPdf, String udidPdf, String bankPassbookPdf) {
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.address = address;
        this.city = city;
        this.state = state;
        this.udidNumber = udidNumber;
        this.aadhaarNo = aadhaarNo;
        this.sex = sex;
        this.accountNo = accountNo;
        this.ifscCode = ifscCode;
        this.password = password;
        this.aadhaarPdf = aadhaarPdf;
        this.udidPdf = udidPdf;
        this.bankPassbookPdf = bankPassbookPdf;
    }

    public Long getSid() { return sid; }
    public void setSid(Long sid) { this.sid = sid; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getContact() { return contact; }
    public void setContact(String contact) { this.contact = contact; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getUdidNumber() { return udidNumber; }
    public void setUdidNumber(String udidNumber) { this.udidNumber = udidNumber; }

    public String getAadhaarNo() { return aadhaarNo; }
    public void setAadhaarNo(String aadhaarNo) { this.aadhaarNo = aadhaarNo; }

    public Sex getSex() { return sex; }
    public void setSex(Sex sex) { this.sex = sex; }

    public String getAccountNo() { return accountNo; }
    public void setAccountNo(String accountNo) { this.accountNo = accountNo; }

    public String getIfscCode() { return ifscCode; }
    public void setIfscCode(String ifscCode) { this.ifscCode = ifscCode; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getAadhaarPdf() { return aadhaarPdf; }
    public void setAadhaarPdf(String aadhaarPdf) { this.aadhaarPdf = aadhaarPdf; }

    public String getUdidPdf() { return udidPdf; }
    public void setUdidPdf(String udidPdf) { this.udidPdf = udidPdf; }

    public String getBankPassbookPdf() { return bankPassbookPdf; }
    public void setBankPassbookPdf(String bankPassbookPdf) { this.bankPassbookPdf = bankPassbookPdf; }

    public List<Product> getProducts() { return products; }
    public void setProducts(List<Product> products) { this.products = products; }
}
