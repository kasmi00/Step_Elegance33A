package com.example.stepelegance.controller;

import com.example.stepelegance.dto.AuthenticateRequest;
import com.example.stepelegance.dto.AuthenticateResponse;
import com.example.stepelegance.service.AuthenticateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticateService authenticateService;

    @PostMapping("/authenticate")
    public AuthenticateResponse authenticate(@RequestBody AuthenticateRequest authenticateRequest){
        return authenticateService.authenticate(authenticateRequest);
    }
}
