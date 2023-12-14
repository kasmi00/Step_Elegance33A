package com.example.stepelegance.controller;

import com.example.stepelegance.Entity.Product;
import com.example.stepelegance.dto.ProductDTO;
import com.example.stepelegance.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins ="http://localhost:5173/")
@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    @GetMapping("/data")
    public String getData(){
        return "data retrieved";
    }


    @PostMapping("/save")
    public String createData(@RequestBody ProductDTO productDTO){
        System.out.println(productDTO);
        productService.save(productDTO);
        return "created data";
    }

    @GetMapping("/getAll")
    public List<Product> getAllData(){
        return productService.getAll();

    }

    @GetMapping("/getById/{id}")
    public Optional<Product> getById(@PathVariable("productId") Integer id){
        return productService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("productId") Integer productId){
        productService.deleteById(productId);
    }

}
