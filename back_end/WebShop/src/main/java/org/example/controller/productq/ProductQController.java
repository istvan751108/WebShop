package org.example.controller.productq;

import org.example.model.productq.ProductQ;
import org.example.service.productq.ProductQService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/search")
public class ProductQController {

    private final ProductQService service;

    public ProductQController(ProductQService service) {
        this.service = service;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<ProductQ>> getProdSearch(@RequestParam String q){
        return new ResponseEntity<>(service.getProdSearch(q), HttpStatus.OK);
    }
}
