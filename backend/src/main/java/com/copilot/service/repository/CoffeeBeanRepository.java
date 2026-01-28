package com.copilot.service.repository;

import com.copilot.service.model.CoffeeBean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoffeeBeanRepository extends JpaRepository<CoffeeBean, Long> {
}
