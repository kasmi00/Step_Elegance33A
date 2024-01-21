package com.example.stepelegance.dto;

import com.example.stepelegance.Entity.Address;
import com.example.stepelegance.Entity.Cart;
import com.example.stepelegance.Entity.UserDefinedDataEnums.TransactionStatus;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactionDTO {
    private Integer transactionId;

    private TransactionStatus status;

    @NotNull
    private Address address;

    @NotNull
    private Cart cart;

    @NotNull
    private float discount;
    @NotNull
    private float total;


}
