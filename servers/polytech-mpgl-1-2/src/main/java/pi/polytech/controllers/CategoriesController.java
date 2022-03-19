package pi.polytech.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pi.polytech.entities.Category;
import pi.polytech.repositories.CategoriesRepository;
import pi.polytech.request.CategroyModel;
import pi.polytech.response.ApiReponse;

@RequestMapping("/categories")
@RestController()
public class CategoriesController {

	
	@Autowired
	private CategoriesRepository categoriesRepository;
	
	
	/*
	 * public CategoriesController( CategoriesRepository categoriesRepository) {
		this.categoriesRepository = categoriesRepository;
	}
	 * */
	
	
	@GetMapping("/list")
	List<Category> findAll(){
		return this.categoriesRepository.findAll();
	}
	
	
	@PostMapping("/add") 
	public ResponseEntity<?> createNewCategory( @RequestBody CategroyModel model ){
		
		Category c = new Category();
		
		c.setName(model.getName());
		 
		 
		                // success 200
		return ResponseEntity.ok(this.categoriesRepository.save(c));
	}
	
	@PutMapping("/update/{id}") 
	public ResponseEntity<?> updateCatgeory( @RequestBody CategroyModel model, @PathVariable long id ){
		
		try {
			Category c = this.categoriesRepository.findById(id).get();
			
			c.setName(model.getName());
			 
			 
			                // success 200
			return ResponseEntity.ok(this.categoriesRepository.save(c));
		}catch(Exception e) {
			return ResponseEntity.notFound().build().ok("category not found");
		}
	}
	
	
	
	
	@DeleteMapping("/delete/{id}") 
	public ResponseEntity<?> updateCatgeory(  @PathVariable long id ){
		
		try {
			Category c = this.categoriesRepository.findById(id).get(); 
			
			this.categoriesRepository.delete(c);
			
			ApiReponse res = new ApiReponse();
			
			res.setSuccess(true);
			res.setMessage("category deleted successfully"); 
			
			
			return ResponseEntity.ok(res);
		}catch(Exception e) {
			return ResponseEntity.notFound().build().ok("category not found");
		}
	}
	
	
	
}
