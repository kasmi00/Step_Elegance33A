package com.example.stepelegance.service;

import com.example.stepelegance.Entity.Transaction;
import com.example.stepelegance.dto.TransactionDTO;

import java.util.List;
import java.util.Optional;

public interface TransactionService {
    String save(TransactionDTO transactionDTO);
    List<Transaction> getAll();
    Optional<Transaction> getById(Integer transactionId);


    void deleteById(Integer transactionId);
}
