//package com.main.project.service;
//
//import com.main.project.dao.ProductRepository;
//import com.main.project.model.Product;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.File;
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.util.List;
//import java.util.Optional;
//
//
//@Service
//public class ProductService {
//
//    @Autowired
//    private ProductRepository productRepository;
//
//    private static final Logger logger = LoggerFactory.getLogger(ProductService.class);
//
//    // Upload directory outside the static folder
//    private static final String UPLOAD_DIR = System.getProperty("user.dir") + "/uploads/";
//
//    public List<Product> getAllProducts() {
//        List<Product> products = productRepository.findAll();
//        logger.info("Returning Products: {}", products);
//        return products;
//    }
//
//    public List<Product> getProductsByCategory(String category) {
//        return productRepository.findByCategoryIgnoreCase(category);
//    }
//
//    public List<String> getAllCategories() {
//        return productRepository.findDistinctCategories();
//    }
//
//    public Optional<Product> getProductById(Long pid) {
//        return productRepository.findById(pid);
//    }
//
////    public Product getProductById(Long pid) {
////        return productRepository.findById(pid).orElse(null);
////    }
//
//    public Product saveProduct(Product product) {
//        return productRepository.save(product);
//    }
//
//    public void deleteProduct(Long pid) {
//        productRepository.deleteByPid(pid);
//    }
//
//    public List<Product> getProductsBySeller(Long sid) {
//        return productRepository.findBySeller_Sid(sid);
//    }
//
//    public String saveImage(MultipartFile file) throws IOException {
//        if (file.isEmpty()) {
//            logger.warn("File upload failed: file is empty.");
//            throw new IOException("File is empty");
//        }
//
//        String contentType = file.getContentType();
//        if (contentType == null || !contentType.startsWith("image/")) {
//            logger.warn("Invalid image type: {}", contentType);
//            throw new IOException("Only image files are allowed");
//        }
//
//        File directory = new File(UPLOAD_DIR);
//        if (!directory.exists()) {
//            boolean created = directory.mkdirs();
//            logger.info("Upload directory created: {}", created);
//        }
//
//        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
//        Path filePath = Paths.get(UPLOAD_DIR, fileName);
//        Files.write(filePath, file.getBytes());
//
//        logger.info("Image saved to: {}", filePath);
//
//        // Return just the relative path to be used in frontend
//        return "/uploads/" + fileName;
//    }
//}

package com.main.project.service;

import com.main.project.dao.ProductRepository;
import com.main.project.model.Product;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    private static final Logger logger = LoggerFactory.getLogger(ProductService.class);

    // Upload directory
    private static final String UPLOAD_DIR = System.getProperty("user.dir") + "/uploads/";

    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();
        logger.info("Returning Products: {}", products);
        return products;
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategoryIgnoreCase(category);
    }

    public List<String> getAllCategories() {
        return productRepository.findDistinctCategories();
    }

    public Optional<Product> getProductById(Long pid) {
        return productRepository.findById(pid);
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long pid) {
        productRepository.deleteByPid(pid);
    }

    public List<Product> getProductsBySeller(Long sid) {
        return productRepository.findBySeller_Sid(sid);
    }

    public String saveImage(MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            logger.warn("File upload failed: file is empty.");
            throw new IOException("File is empty");
        }

        String contentType = file.getContentType();
        if (contentType == null || !contentType.startsWith("image/")) {
            logger.warn("Invalid image type: {}", contentType);
            throw new IOException("Only image files are allowed");
        }

        File directory = new File(UPLOAD_DIR);
        if (!directory.exists()) {
            boolean created = directory.mkdirs();
            logger.info("Upload directory created: {}", created);
        }

        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(UPLOAD_DIR, fileName);
        Files.write(filePath, file.getBytes());

        logger.info("Image saved to: {}", filePath);

        // Return only filename, not full path
        return fileName;
    }
}

