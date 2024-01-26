package com.example.stepelegance.service.impl;

import com.example.stepelegance.Entity.Transaction;
import com.example.stepelegance.dto.TransactionDTO;
import com.example.stepelegance.repository.AddressRepository;
import com.example.stepelegance.repository.CartRepository;
import com.example.stepelegance.repository.TransactionRepository;
import com.example.stepelegance.repository.UserRepository;
import com.example.stepelegance.service.CartService;
import com.example.stepelegance.service.TransactionService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TransactionServiceImpl implements TransactionService {
    private final TransactionRepository transactionRepository;
    private final AddressRepository addressRepository;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;

    @Override
    public String save(TransactionDTO transactionDTO) {
        Transaction transaction = new Transaction();

        if (transactionDTO.getTransactionId()!=null){
            transaction = transactionRepository.findById(transactionDTO.getTransactionId())
                    .orElseThrow(()-> new NullPointerException("Transaction id cannot be found"));
        }

        transaction.setTransactionStatus(transactionDTO.getStatus());

        if (transactionDTO.getAddress()!=null){
            transaction.setAddress(transactionDTO.getAddress());
        }else if (transactionDTO.getAddressId()!=null){
            transaction.setAddress(addressRepository.findById(transactionDTO.getAddressId()).orElseThrow(()-> new NullPointerException("AddressId cannot be found.")));
        }else{
            return "Address is not given.";
        }
        if (transactionDTO.getCart()!=null){
            transaction.setCart(transactionDTO.getCart());
        } else if (transactionDTO.getCartId()!=null) {
            transaction.setCart(cartRepository.findById(transactionDTO.getCartId()).orElseThrow(()->new NullPointerException("Cart id cannot be found.")));
        }else{
            return "Cart is not given.";
        }
        transaction.setDiscount(transactionDTO.getDiscount());
        transaction.setTotal(transactionDTO.getTotal());

        transactionRepository.save(transaction);
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
