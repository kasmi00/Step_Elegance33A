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

        if (userDTO.getId()!=null){
            user=userRepository.findById(userDTO.getId())
                    .orElseThrow(()->new NullPointerException("data not found"));
        }
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setPassword(userDTO.getPassword());
        user.setEmail(userDTO.getEmail());
        user.setGender(userDTO.getGender());
        user.setDateOfBirth(userDTO.getDateOfBirth());

        userRepository.save(user); // for both creating and updating(if id is passed)

        return "created";
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll(); // select * from users;
    }

    @Override
    public Optional<User> getById(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
        userRepository.deleteById(id);
    }

}
