package com.example.stepelegance.service.impl;

import com.example.stepelegance.Entity.Cart;
import com.example.stepelegance.Entity.User;
import com.example.stepelegance.dto.CartDTO;
import com.example.stepelegance.repository.CartRepository;
import com.example.stepelegance.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;
    @Override
    public String save(CartDTO cartDTO) {
        Cart cart= new Cart();

        if (cartDTO.getCartId()!=null){// for editing cart
            cart = cartRepository.findById(cartDTO.getCartId())
                    .orElseThrow(() -> new NullPointerException("cart id cannot be found to edit data"));
        }

        cart.setUser(cartDTO.getUser());
        cart.setProduct(cartDTO.getProduct());
        cart.setDate(cartDTO.getDate());
        cart.setAmount(cartDTO.getAmount());

        cartRepository.save(cart);
        return "cart saved successfully";

    }

    @Override
    public List<Cart> getAll() {
        return cartRepository.findAll();
    }


    @Override
    public Optional<Cart> getById(Integer cartId) {
        return cartRepository.findById(cartId);
    }


    @Override
    public Optional<Cart> getByUserEmail(String userEmail) {// Work in progress

        User user = new User();

        return cartRepository.findByUser(user);
    }

    @Override
    public void deleteById(Integer cartId) {
        cartRepository.deleteById(cartId);
    }
}
