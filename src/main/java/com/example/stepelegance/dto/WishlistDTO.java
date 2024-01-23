package com.example.stepelegance.dto;

import com.example.stepelegance.Entity.Product;
import com.example.stepelegance.Entity.User;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class WishlistDTO {
    private Integer wishlistId;
    private User user;
    private Product product;
    private String userEmail;
    private String productName;
}
