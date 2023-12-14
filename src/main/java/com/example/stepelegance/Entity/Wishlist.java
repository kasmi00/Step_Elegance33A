package com.example.stepelegance.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="wishlist", uniqueConstraints = {
        @UniqueConstraint(name = "UNIQUE_user_id", columnNames = "user_id")
})
public class Wishlist {

    @Id
    @SequenceGenerator(name="wishlist_seq_gen", sequenceName = "wishlist_id_seq", allocationSize = 1)
    @GeneratedValue(generator ="wishlist_seq_gen" ,strategy = GenerationType.IDENTITY)
    private int wishlistId;

    @OneToOne
    @JoinColumn(name = "user_id", unique = true, nullable = false)
    private User user;

    /*
    @OneToMany(mappedBy = "wishlist", cascade = CascadeType.ALL)
    private List<Product> products;
    */
    @ManyToMany
    @JoinTable(
            name = "wishlist_product",
            joinColumns = @JoinColumn(name = "wishlist_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private List<Product> products;
}
