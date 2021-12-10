package org.example.web;


import org.example.entity.Product;
import org.example.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
@CrossOrigin(origins={"http://localhost:4200/"})
@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;


    @RequestMapping(
            method = RequestMethod.GET,
            value = "/api/products",
            produces = {"application/json"}
    )
     public Collection<Product> getAll() {
        Collection<Product> products = productRepository.findAll();
        return products;
    }
}
