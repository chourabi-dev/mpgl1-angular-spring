package pi.polytech.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import pi.polytech.request.ProductModel;

@RestController()
@RequestMapping("/app")
public class AppController {
	
	
	@GetMapping("/hello")
	public String sayHelloToClient () {
		return "Hellow world";
	}
	
	@GetMapping("/somme")
	public int somme (@RequestParam( required = true ) int x, @RequestParam( required = true ) int y) {
		return (x+y);
	}
	
	
	/* when our path has a varibele section  */
	
	/*/user/details/1 /user/details/2 /user/details/3 ... if not => 404 */
	
	
	@GetMapping("/user/details/{userID}")
	public String getUserById( @PathVariable(name="userID") long id ) {
		System.out.println( id );
		// SELECT * FOMR USER WHERE ID = ?
		return "getting user informatrion...";
	}
	
	
	 // @DeleteMapping("/delete/{id}")
	
	
	/*****************************************************************************************************/
	
	
	@PostMapping("/product")                    // model 
	public ProductModel addNewProduct( @RequestBody ProductModel  body ) {
		
		return body;
	}
	
	@PutMapping("/product")                    // model 
	public ProductModel updateProduct( @RequestBody ProductModel  body ) {
		
		return body;
	}
	
	
	
	

}
