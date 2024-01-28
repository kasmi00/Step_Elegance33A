package com.example.stepelegance.controller;

import com.example.stepelegance.Entity.Transaction;
import com.example.stepelegance.dto.TransactionDTO;
import com.example.stepelegance.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins ="http://localhost:5173/" )
@RestController
@RequestMapping("/transaction")
@RequiredArgsConstructor
public class TransactionController {
    public final TransactionService transactionService;


    @PostMapping("/save")
    public String createData(@ModelAttribute TransactionDTO transactionDTO){
        System.out.println(transactionDTO);
        transactionService.save(transactionDTO);
        return "created data";
    }

    @GetMapping("/getAll")
    public List<Transaction> getAllData(){
        return transactionService.getAll();

    }

    @GetMapping("/getById/{id}")
    public Optional<Transaction> getById(@PathVariable("id") Integer id){
        return transactionService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public String deleteById(@PathVariable("id") Integer transactionId){
        transactionService.deleteById(transactionId);
        return "transaction deleted.";
    }
}