package org.example.controller.home;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.example.model.home.Home;
import org.example.service.home.HomeService;

import java.util.List;

@Controller
@RequestMapping("home")
public class HomeController {
    @GetMapping
    public ResponseEntity<List<Home>> getHomes(){
        return new ResponseEntity<>(home, HttpStatus.OK);
    }
}
