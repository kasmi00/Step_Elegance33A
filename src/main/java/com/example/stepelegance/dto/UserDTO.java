package com.example.stepelegance.dto;

import com.example.stepelegance.Entity.UserDefinedDataEnums.Gender;
import com.example.stepelegance.Entity.UserDefinedDataEnums.Role;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Integer id;
    @NotNull
    private Role role;
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @NotNull
    private String phone;
    @NotNull
    private String email;
    @NotNull
    private String password;
    @NotNull
    private Gender gender;
    @NotNull
    private LocalDate dateOfBirth;
    @NotNull
    private String token;



}
