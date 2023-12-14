package com.example.stepelegance.service.impl;

import com.example.stepelegance.Entity.User;
import com.example.stepelegance.dto.UserDTO;
import com.example.stepelegance.repository.UserRepository;
import com.example.stepelegance.service.UserService;
import org.aspectj.lang.annotation.RequiredTypes;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;



@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public String save(UserDTO userDTO){
        User user = new User();

        if (userDTO.getUserId()!=null){
            user=userRepository.findById(userDTO.getUserId())
                    .orElseThrow(()->new NullPointerException("user data not found"));
        }
        user.setRole(userDTO.getRole());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setPhone(userDTO.getPhone());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setGender(userDTO.getGender());
        user.setDateOfBirth(userDTO.getDateOfBirth());
        user.setToken(userDTO.getToken());

        userRepository.save(user); // for both creating and updating(if id is passed)

        return "new user created";
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll(); // select * from users;
    }

    @Override
    public Optional<User> getById(Integer userId) {
        return userRepository.findById(userId);
    }

    @Override
    public Optional<User> getByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public void deleteById(Integer userId) {
        userRepository.deleteById(userId);
    }

}
