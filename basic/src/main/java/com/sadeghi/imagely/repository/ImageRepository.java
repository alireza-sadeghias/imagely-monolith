package com.sadeghi.imagely.repository;

import com.sadeghi.imagely.model.Image;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ImageRepository extends PagingAndSortingRepository<Image,String>,CrudRepository<Image,String> {
}
