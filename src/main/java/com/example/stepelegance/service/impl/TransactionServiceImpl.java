package com.example.stepelegance.service.impl;

import com.example.stepelegance.Entity.Transaction;
import com.example.stepelegance.dto.TransactionDTO;
import com.example.stepelegance.repository.TransactionRepository;
import com.example.stepelegance.service.TransactionService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TransactionServiceImpl implements TransactionService {
    private final TransactionRepository transactionRepository;
    @Override
    public String save(TransactionDTO transactionDTO) {
        Transaction transaction = new Transaction();

        if (transactionDTO.getTransactionId()!=null){
            transaction = transactionRepository.findById(transactionDTO.getTransactionId())
                    .orElseThrow(()-> new NullPointerException("Transaction id cannot be found"));
        }

        transaction.setAddress(transactionDTO.getAddress());
        transaction.setTransactionStatus(transactionDTO.getStatus());
        transaction.setCart(transactionDTO.getCart());
        transaction.setDiscount(transactionDTO.getDiscount());
        transaction.setTotal(transactionDTO.getTotal());

        return "transaction saved successfully";
    }

    @Override
    public List<Transaction> getAll() {
        return transactionRepository.findAll();
    }

    @Override
    public Optional<Transaction> getById(Integer transactionId) {
        return transactionRepository.findById(transactionId);
    }

    @Override
    public void deleteById(Integer transactionId) {
        transactionRepository.deleteById(transactionId);
    }
}
