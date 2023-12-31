package com.example.stepelegance.service;

import com.example.stepelegance.Entity.Product;
import com.example.stepelegance.dto.ProductDTO;
import com.example.stepelegance.dto.UserDTO;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    String save(ProductDTO productDTO);
    List<Product> getAll();
    Optional<Product> getById(Integer productId);
    void deleteById(Integer productId);
}

