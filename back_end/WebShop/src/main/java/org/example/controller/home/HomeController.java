package org.example.controller.home;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.example.model.home.Home;
import org.example.service.home.HomeService;

import java.util.List;

@Controller
@RequestMapping("categories")
public class HomeController {

    private final HomeService service;

    public HomeController(HomeService service) {
        this.service = service;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<Home>> getHomes(){
        List<Home> homes = service.getHomes();
        return new ResponseEntity<>(homes, HttpStatus.OK);
    }
}
