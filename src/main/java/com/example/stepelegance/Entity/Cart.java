package com.example.stepelegance.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="cart")
public class Cart {
    @Id
    @SequenceGenerator(name="cart_seq_gen", sequenceName = "cart_id_sequence", allocationSize = 1)
    @GeneratedValue(generator = "cart_seq_gen", strategy = GenerationType.IDENTITY)
    private Integer cartId;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(name="date", nullable = false)
    private LocalDate date;

    @Column(name = "amount", nullable = false)
    private float amount;

}