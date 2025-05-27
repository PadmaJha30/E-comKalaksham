package com.main.seller.dao;



import com.main.seller.model.Seller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Long> {


	    Optional<Seller> findByEmail(String email); // ✅ Ensure this method is correct
	

    //Find seller by contact number
    Optional<Seller> findByContact(String contact);

    Optional<Seller> findBySid(Long sid);
	void deleteBySid(Long sid);

	
}
