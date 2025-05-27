
package com.main.project.controller;

import com.main.project.model.Product;
import com.main.project.service.ProductService;
import com.main.seller.dao.SellerRepository;
import com.main.seller.model.Seller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.Optional;



import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private SellerRepository sellerRepository;

    // Get all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    // Get product by ID
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return productService.getProductById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Get products by category
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String category) {
        List<Product> products = productService.getProductsByCategory(category);
        return ResponseEntity.ok(products); // 200 OK even if empty
    }

    // Get all unique categories
    @GetMapping("/categories")
    public ResponseEntity<List<String>> getProductCategories() {
        List<String> categories = productService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    // Add product with image and seller ID
    @PostMapping("/add")
    public ResponseEntity<?> addProduct(
            @RequestParam("name") String name,
            @RequestParam("price") double price,
            @RequestParam("category") String category,
            @RequestParam("image") MultipartFile image,
            @RequestParam("sellerId") Long sellerId) {
        try {
            Optional<Seller> sellerOptional = sellerRepository.findBySid(sellerId);
            if (!sellerOptional.isPresent()) {
                return ResponseEntity.badRequest().body("Seller not found");
            }

            // Save image to "uploads" folder
            String imageUrl = productService.saveImage(image); // Must return "/api/products/images/filename"

            // Create and save product
            Product product = new Product(name, price, category, imageUrl, sellerOptional.get());
            Product savedProduct = productService.saveProduct(product);

            return ResponseEntity.ok(savedProduct);

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error saving image: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Something went wrong: " + e.getMessage());
        }
    }

    //  Serve images from uploads folder
//    @GetMapping("/images/{filename}")
//    public ResponseEntity<Resource> getImage(@PathVariable String filename) {
//        try {
//            Path filePath = Paths.get("uploads").resolve(filename);
//            Resource resource = new UrlResource(filePath.toUri());
//
//            if (!resource.exists() || !resource.isReadable()) {
//                return ResponseEntity.notFound().build();
//            }
//
//            return ResponseEntity.ok()
//                    .header(HttpHeaders.CONTENT_TYPE, Files.probeContentType(filePath))
//                    .body(resource);
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }

//    @GetMapping("/images/{filename:.+ }")
//    public ResponseEntity<byte[]> getImage(@PathVariable String filename) {
//        try {
//            Path imagePath = Paths.get(System.getProperty("user.dir") + "/uploads/" + filename);
//            byte[] imageBytes = Files.readAllBytes(imagePath);
//
//            String contentType = Files.probeContentType(imagePath);
//            if (contentType == null) {
//                contentType = "application/octet-stream";
//            }
//
//            return ResponseEntity.ok()
//                    .header("Content-Type", contentType)
//                    .body(imageBytes);
//
//        } catch (IOException e) {
//            return ResponseEntity.notFound().build();
//        }
//    }

    
    @GetMapping("/api/products/images/{filename:.+}")
    public ResponseEntity<byte[]> getImage(@PathVariable String filename) {
        try {
            // Safely resolve path to prevent path traversal attacks
//            Path imagePath = Paths.get(System.getProperty("user.dir"), "uploads", filename).normalize();
            Path imagePath = Paths.get("uploads/images").resolve(filename);
            Resource resource = new UrlResource(imagePath.toUri());

            if (!Files.exists(imagePath)) {
                return ResponseEntity.notFound().build();
            }

            byte[] imageBytes = Files.readAllBytes(imagePath);
            String contentType = Files.probeContentType(imagePath);
            if (contentType == null) {
                contentType = "application/octet-stream";
            }

            return ResponseEntity.ok()
                    .header("Content-Type", contentType)
                    .body(imageBytes);

        } catch (IOException e) {
            return ResponseEntity.notFound().build();
        }
    }

 
    
    // Delete product
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok("Product deleted successfully.");
    }

    // Get products by seller ID
    @GetMapping("/seller/{sellerId}")
    public List<Product> getProductsBySeller(@PathVariable Long sellerId) {
        return productService.getProductsBySeller(sellerId);
    }
}

