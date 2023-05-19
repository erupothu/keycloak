package com.viha.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

    @GetMapping("welcome")
    public ResponseEntity<?> welcomeMethod() {
        return ResponseEntity.ok("welcome to Application");
    }

    @GetMapping("public/welcome")
    public ResponseEntity<?> welcomePublicMethod() {
        return ResponseEntity.ok("welcome to Public Application");
    }

    @GetMapping("member/welcome")
    public ResponseEntity<?> memberWelcomeMethod() {
        return ResponseEntity.ok("Member welcome to Application");
    }

    @GetMapping("admin/welcome")
    public ResponseEntity<?> adminWelcomeMethod() {
        return ResponseEntity.ok("Admin welcome to Application");
    }
    @GetMapping("testing/welcome")
    public ResponseEntity<?> testWelcomeMethod() {
        return ResponseEntity.ok("Admin welcome to Application");
    }
}
