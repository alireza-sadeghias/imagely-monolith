package com.sadeghi.imagely.controller;

import com.sadeghi.imagely.model.User;
import com.sadeghi.imagely.repository.UserRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/users",produces = "application/json")
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/new")
    public User saveUser(){
        return new User();
    }

    @GetMapping(params = "recent")
    public Iterable<User> recentUsers(){
        PageRequest page = PageRequest.of(0,10, Sort.by("createdAt").descending());
        return userRepository.findAll(page).getContent();
    }

}
