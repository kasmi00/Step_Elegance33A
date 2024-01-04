package com.example.stepelegance.repository;

import com.example.stepelegance.Entity.ContactUS;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUS, Integer> {

}
