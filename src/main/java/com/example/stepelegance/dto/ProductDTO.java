package com.example.stepelegance.dto;

import com.example.stepelegance.Entity.UserDefinedDataEnums.ProductCategory;
import com.example.stepelegance.Entity.UserDefinedDataEnums.ProductType;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    private Integer productId;

    @NotNull
    private String productName;

    private byte[] productImage;

    @NotNull
    private String description;

    @NotNull
    private float price;

    @NotNull
    private int quantity;

    @NotNull
    private int size;

    @NotNull
    private ProductType type;

    @NotNull
    private ProductCategory category;

}
