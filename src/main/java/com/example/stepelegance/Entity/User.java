package com.example.stepelegance.Entity;

import com.example.stepelegance.Entity.UserDefinedDataEnums.Gender;
import com.example.stepelegance.Entity.UserDefinedDataEnums.Role;
import jakarta.persistence.*;
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

    @Column(name = "role", nullable = false)
    private Role role;

    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Column(name="lastName", nullable = false)
    private String lastName;

    @Column(name="phone", nullable = true, unique = true)
    private String phone;

    @Column(name="email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "gender", nullable = false)
    private Gender gender;

    @Column(name = "dateOfBirth", nullable = false)
    private LocalDate dateOfBirth;

    @Column(name="token", nullable = false, unique = true)
    private String token;
}
