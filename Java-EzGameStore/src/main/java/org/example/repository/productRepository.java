package org.example.repository;

import org.example.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface productRepository extends JpaRepository<Product, Integer> {
}
