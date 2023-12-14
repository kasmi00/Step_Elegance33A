package com.example.stepelegance.Entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="wishlist")
public class WishList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int wishlistId;

    @OneToOne
    @JoinColumn(name = "userId", unique = true, nullable = false)
    private User user;

    @OneToMany(mappedBy = "wishlist", cascade = CascadeType.ALL)
    private List<Product> products;
}
