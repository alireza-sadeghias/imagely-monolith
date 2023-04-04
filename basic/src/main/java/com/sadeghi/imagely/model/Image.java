package com.sadeghi.imagely.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor(force = true)
public class Image {
    private final String id;
    private final String name;
    private final String createdAt;
    private final String updatedAt;
    private final String promotedAt;
    private final Integer width;
    private final Integer height;
    private final String color;
    private final String blur_hash;
    private final String description;
    private final String altDescription;


}
