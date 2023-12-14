package com.example.stepelegance.Entity;

import com.example.stepelegance.Entity.UserDefinedDataEnums.Gender;
import com.example.stepelegance.Entity.UserDefinedDataEnums.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDate;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users", uniqueConstraints = {
        @UniqueConstraint(name="UNIQUE_user_email", columnNames = "email")
})
public class User {

    @Id
    @SequenceGenerator(name = "users_seq_gen", sequenceName = "users_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "users_seq_gen", strategy = GenerationType.SEQUENCE)
    private Integer userId;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private Role role;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name="last_name", nullable = false)
    private String lastName;

    @Size(min = 9)
    @Column(name="phone", nullable = false, unique = true)
    private String phone;

    @Email
    @Column(name="email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender", nullable = false)
    private Gender gender;

    @Column(name = "date_of_birth", nullable = false)
    private LocalDate dateOfBirth;

    @Column(name="token", nullable = false, unique = true)
    private String token;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Wishlist wishlist;
}
