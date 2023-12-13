package com.example.stepelegance.service.impl;

import com.example.stepelegance.Entity.Product;
import com.example.stepelegance.dto.ProductDTO;
import com.example.stepelegance.repository.ProductRepository;
import com.example.stepelegance.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Override
    public String save(ProductDTO productDTO) {

        Product product = new Product();

        if (productDTO.getProductId()!=null){
            product=productRepository.findById(productDTO.getProductId())
                    .orElseThrow(()->new NullPointerException("product data not found"));
        }

        product.setProductName(productDTO.getProductName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setQuantity(productDTO.getQuantity());
        product.setSize(productDTO.getSize());
        product.setType(productDTO.getType());
        product.setCategory(productDTO.getCategory());

        productRepository.save(product);

        return "product successfully added";
    }

    @Override
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> getById(Integer productId) {
        return productRepository.findById(productId);
    }

    @Override
    public void deleteById(Integer productId) {
        productRepository.deleteById(productId);
    }


}
