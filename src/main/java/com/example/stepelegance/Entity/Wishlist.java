package com.example.stepelegance.Entity;

import jakarta.persistence.*;
import lombok.*;


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
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;
}
