package com.example.stepelegance.Entity;

import com.example.stepelegance.Entity.UserDefinedDataEnums.ProductCategory;
import com.example.stepelegance.Entity.UserDefinedDataEnums.ProductType;
import jakarta.persistence.*;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Product")
public class Product {

    @Id
    @SequenceGenerator(name = "product_seq_gen", sequenceName = "product_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "product_seq_gen", strategy = GenerationType.SEQUENCE)
    private Integer productId;

    @Column(name="productName", nullable = false)
    private String productName;

    @Column(name="description", nullable = false)
    private String description;

    @Column(name="price", nullable = false)
    private float price;

    @Column(name="quantity", nullable = false)
    private int quantity;

    @Column(name="size", nullable = false)
    private int size;

    @Column(name="type", nullable = false)
    private ProductType type;

    @Column(name="category", nullable = false)
    private ProductCategory category;

}
