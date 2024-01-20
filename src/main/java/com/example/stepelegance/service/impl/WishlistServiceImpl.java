package com.example.stepelegance.service.impl;

import com.example.stepelegance.Entity.Wishlist;
import com.example.stepelegance.dto.WishlistDTO;
import com.example.stepelegance.repository.WishlistRepository;
import com.example.stepelegance.service.WishlistService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class WishlistServiceImpl implements WishlistService {

    private final WishlistRepository wishlistRepository;
    @Override
    public String save(WishlistDTO wishlistDTO) {
        Wishlist wishlist = new Wishlist();

        if (wishlistDTO.getWishlistId()!=null){
            wishlist=wishlistRepository.findById(wishlistDTO.getWishlistId())
                    .orElseThrow(()->new NullPointerException("WishList not found"));
        }
        wishlist.setUser(wishlistDTO.getUser());
        wishlist.setProduct(wishlistDTO.getProduct());

        wishlistRepository.save(wishlist);

        return "New WishList Created.";

    }

    @Override
    public List<Wishlist> getAll() {
        return null;
    }

    @Override
    public Optional<Wishlist> getById(Integer wishlistId) {
        return Optional.empty();
    }

    @Override
    public void deleteById(Integer wishlistId) {

    }
}
