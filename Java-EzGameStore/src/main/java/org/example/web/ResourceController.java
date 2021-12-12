package org.example.Web;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class ResourceController {
    @GetMapping("/api/public")
    public String publicResource(){

        ///insert main paige here?
        return "PUBLIC";
    }

    @GetMapping("/api/private")
    public String privateResource(){

        //insert different page here

        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails=(UserDetails) authentication.getPrincipal();

        System.out.println(userDetails.getUsername());
        System.out.println(userDetails.getAuthorities());

        return "PRIVATE";
    }
}
