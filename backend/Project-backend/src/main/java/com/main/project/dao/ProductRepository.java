package com.main.project.dao;

import com.main.project.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByCategory(String category);

    Optional<Product> findByPid(Long pid); // Change from findById() to findByPid()

    void deleteByPid(Long pid); // Change from deleteById() to deleteByPid()
    
  
    List<Product> findBySeller_Sid(Long sid);
    

    @Query("SELECT DISTINCT p.category FROM Product p")
    List<String> findDistinctCategories();
  
    List<Product> findByCategoryIgnoreCase(String category);
    
    List<Product> findAllByOrderByCreatedAtDesc();

}
