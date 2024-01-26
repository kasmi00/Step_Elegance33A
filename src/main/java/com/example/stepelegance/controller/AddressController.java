package com.example.stepelegance.controller;

import com.example.stepelegance.Entity.Address;
import com.example.stepelegance.dto.AddressDTO;
import com.example.stepelegance.service.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/address")
@RequiredArgsConstructor
public class AddressController {
    private final AddressService addressService;

    @PostMapping("/save")
    public String createData(@RequestBody AddressDTO addressDTO){
        return addressService.save(addressDTO);
    }

    @GetMapping
    public List<Address> getAllData(){return addressService.getAll();}

    @DeleteMapping("/deleteById/{address_id}")
    public String deleteByID(@PathVariable("address_id") Integer id){
        addressService.deleteById(id);
        return "deleted successfully";
    }
}
