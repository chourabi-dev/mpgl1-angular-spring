package pi.polytech.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import pi.polytech.entities.Category;

public interface CategoriesRepository extends JpaRepository<Category,Long> {

}
