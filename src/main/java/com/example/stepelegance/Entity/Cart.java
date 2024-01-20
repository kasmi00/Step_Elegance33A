package com.example.stepelegance.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="cart")
public class Cart {
    @Id
    @SequenceGenerator(name="cart_seq_gen", sequenceName = "cart_id_sequence", allocationSize = 1, initialValue = 1)
    @GeneratedValue(generator = "cart_seq_gen", strategy = GenerationType.IDENTITY)
    private Integer cartId;

    @OneToOne
    private User user;

    @ManyToMany
    private List<Product> product;

    @Column(name="date", nullable = false)
    private LocalDate date;

    @Column(name = "amount", nullable = false)
    private float amount;

}
