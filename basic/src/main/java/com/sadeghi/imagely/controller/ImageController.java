package com.sadeghi.imagely.controller;

import com.sadeghi.imagely.model.Image;
import com.sadeghi.imagely.repository.ImageRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/images",produces = "application/json")
public class ImageController {

    private ImageRepository imageRepository;

    public ImageController(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    @PostMapping("/new")
    public Image saveImage(){
        return new Image();
    }

    @GetMapping(params = "recent")
    public Iterable<Image> recentUsers(){
        PageRequest page = PageRequest.of(0,10, Sort.by("createdAt").descending());
        return imageRepository.findAll(page).getContent();
    }

}
