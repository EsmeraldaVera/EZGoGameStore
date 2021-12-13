package org.example;

import org.example.entity.User;
import org.example.repository.UserRepository;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.List;

@SpringBootApplication
public class EzGoGameStoreApplication {
    @Autowired
    private UserService userService;

    @PostConstruct
    public void registerUsers(){
        User user1=new User();
        user1.setPassword("123");
        user1.setUsername("test");
        List<String> authorities1=List.of("ROLE_EMPLOYEE","ROLE_TRAINER");
        user1.setAuthorities(authorities1);

        User user2=new User();
        user2.setPassword("123");
        user2.setUsername("Emp");
        List<String> authorities2=List.of("ROLE_EMPLOYEE");
        user2.setAuthorities(authorities2);
        userService.register(user1);
        userService.register(user2);

    }

    public static void main(String[] args) {
        SpringApplication.run(EzGoGameStoreApplication .class, args);
    }
}
