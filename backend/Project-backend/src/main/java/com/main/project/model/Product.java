package com.main.project.model;

import java.time.LocalDateTime;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;

import com.main.seller.model.Seller;

@Entity
@Table(name = "products")
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Pid") // Matches database column
    private Long pid;

    private String name;
    private double price;
    private String category;
    private String imageUrl; // Store the image path

    @CreationTimestamp  // Automatically sets the timestamp when product is added
    private LocalDateTime createdAt;
    
    @ManyToOne
    @JoinColumn(name = "SId", nullable = false) // Foreign key reference to Seller
    private Seller seller;

    // Constructors
    public Product() {}

    public Product(String name, double price, String category, String imageUrl, Seller seller) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
        this.seller = seller;
    }

    // Getters and Setters
    public Long getPid() { return pid; }
    public void setPid(Long pid) { this.pid = pid; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public Seller getSeller() { return seller; }
    public void setSeller(Seller seller) { this.seller = seller; }
}
