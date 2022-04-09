package pi.polytech.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pi.polytech.entities.Products;
import pi.polytech.repositories.CategoriesRepository;
import pi.polytech.repositories.ProductRespository;
import pi.polytech.request.ProductModel;


@RequestMapping("/products")
@RestController()
public class ProductController {
 
	
	@Autowired
	ProductRespository productRespository;
	
	@Autowired
	private CategoriesRepository categoriesRepository;
	 
	
	@PostMapping("/add")
	ResponseEntity<?> addProduct( @RequestBody ProductModel model ){
		
		Products p = new Products();
		
		p.setName(model.getTitle());
		p.setPrice(model.getPrice());
		p.setQuantity(model.getQuantity()); 
		// join with category
		p.setCategory( this.categoriesRepository.findById(model.getCategory()).get() ); 
		return ResponseEntity.ok(this.productRespository.save(p));
		
		
	}
	
	
	@PostMapping("/update/{id}")
	ResponseEntity<?> edit( @RequestBody ProductModel model, @PathVariable long id ){
		
		Products p = this.productRespository.findById(id).get();
		
		p.setName(model.getTitle());
		p.setPrice(model.getPrice());
		p.setQuantity(model.getQuantity()); 
		// join with category
		p.setCategory( this.categoriesRepository.findById(model.getCategory()).get() ); 
		
		
		return ResponseEntity.ok(this.productRespository.save(p)); 
		
	}
	
	
	@GetMapping("/list")
	ResponseEntity<?> list( ){ 
		return ResponseEntity.ok(this.productRespository.findAll());  
	}
	
	
	
	@GetMapping("/out-of-stock")
	ResponseEntity<?> outOfStock( ){ 
		return ResponseEntity.ok(this.productRespository.findByQuantity(0));  
	}
	
	
	
}
