package com.copilot.service.controller;

import com.copilot.service.model.CoffeeBean;
import com.copilot.service.repository.CoffeeBeanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/coffee-beans")
@CrossOrigin(origins = "http://localhost:4200")
public class CoffeeBeanController {

    @Autowired
    private CoffeeBeanRepository coffeeBeanRepository;

    @GetMapping
    public List<CoffeeBean> getAllCoffeeBeans() {
        return coffeeBeanRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CoffeeBean> getCoffeeBeanById(@PathVariable Long id) {
        Optional<CoffeeBean> coffeeBean = coffeeBeanRepository.findById(id);
        return coffeeBean.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public CoffeeBean createCoffeeBean(@RequestBody CoffeeBean coffeeBean) {
        return coffeeBeanRepository.save(coffeeBean);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CoffeeBean> updateCoffeeBean(@PathVariable Long id, @RequestBody CoffeeBean coffeeBeanDetails) {
        Optional<CoffeeBean> optionalCoffeeBean = coffeeBeanRepository.findById(id);
        
        if (optionalCoffeeBean.isPresent()) {
            CoffeeBean coffeeBean = optionalCoffeeBean.get();
            coffeeBean.setName(coffeeBeanDetails.getName());
            coffeeBean.setOrigin(coffeeBeanDetails.getOrigin());
            coffeeBean.setRoastLevel(coffeeBeanDetails.getRoastLevel());
            coffeeBean.setRating(coffeeBeanDetails.getRating());
            coffeeBean.setDescription(coffeeBeanDetails.getDescription());
            
            return ResponseEntity.ok(coffeeBeanRepository.save(coffeeBean));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/{id}/rating")
    public ResponseEntity<CoffeeBean> updateRating(@PathVariable Long id, @RequestBody Double rating) {
        Optional<CoffeeBean> optionalCoffeeBean = coffeeBeanRepository.findById(id);
        
        if (optionalCoffeeBean.isPresent()) {
            CoffeeBean coffeeBean = optionalCoffeeBean.get();
            coffeeBean.setRating(rating);
            return ResponseEntity.ok(coffeeBeanRepository.save(coffeeBean));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCoffeeBean(@PathVariable Long id) {
        Optional<CoffeeBean> coffeeBean = coffeeBeanRepository.findById(id);
        
        if (coffeeBean.isPresent()) {
            coffeeBeanRepository.delete(coffeeBean.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
