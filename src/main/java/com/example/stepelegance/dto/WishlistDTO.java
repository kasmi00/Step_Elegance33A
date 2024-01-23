package com.example.stepelegance.dto;

import com.example.stepelegance.Entity.Product;
import com.example.stepelegance.Entity.User;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WishlistDTO {
    private Integer wishlistId;
    @NotNull
    private User user;
    @NotNull
    private Product product;
}
