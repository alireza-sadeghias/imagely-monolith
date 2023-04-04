package com.sadeghi.imagely.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor(force = true)
@Getter
@Setter
public class User {
    private String username;
    private String password;
    private String name;
    private String lastName;
    private String cellphone;
    private String mail;
}
