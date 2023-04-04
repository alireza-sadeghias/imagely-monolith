package com.sadeghi.imagely.repository;

import com.sadeghi.imagely.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User,String>, CrudRepository<User,String> {
}
