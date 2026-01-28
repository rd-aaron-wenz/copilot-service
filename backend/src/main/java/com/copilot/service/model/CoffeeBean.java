package com.copilot.service.model;

import jakarta.persistence.*;

@Entity
@Table(name = "coffee_beans")
public class CoffeeBean {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String origin;

    @Column(name = "roast_level", nullable = false)
    private String roastLevel;

    @Column(nullable = false)
    private Double rating;

    private String description;

    public CoffeeBean() {
    }

    public CoffeeBean(String name, String origin, String roastLevel, Double rating, String description) {
        this.name = name;
        this.origin = origin;
        this.roastLevel = roastLevel;
        this.rating = rating;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getRoastLevel() {
        return roastLevel;
    }

    public void setRoastLevel(String roastLevel) {
        this.roastLevel = roastLevel;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
