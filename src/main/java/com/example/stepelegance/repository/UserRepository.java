package com.example.stepelegance.repository;

import com.example.stepelegance.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
