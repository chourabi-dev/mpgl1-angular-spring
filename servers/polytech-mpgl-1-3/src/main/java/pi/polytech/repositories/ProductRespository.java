package pi.polytech.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import pi.polytech.entities.Products;

public interface ProductRespository extends JpaRepository<Products,Long> {

	 List<Products> findByQuantity(int quantity);
	 
	 List<Products> findByPriceLessThan(float price);
}
