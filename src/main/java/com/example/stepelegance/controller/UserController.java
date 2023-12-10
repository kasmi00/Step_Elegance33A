package com.example.stepelegance.controller;

import com.example.stepelegance.Entity.User;
import com.example.stepelegance.dto.UserDTO;
import com.example.stepelegance.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping("/data")
    public String getData(){
        return "data retrieved";
    }


    @PostMapping("/save")
    public String createData(@RequestBody UserDTO userDTO){
        System.out.println(userDTO);
        userService.save(userDTO);
        return "created data";
    }

    @GetMapping("/getAll")
    public List<User> getAllData(){
        return userService.getAll();

    }

    @GetMapping("/getById/{id}")
    public Optional<User> getById(@PathVariable("id") Integer id){
        return userService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Integer id){
        userService.deleteById(id);
    }

}
