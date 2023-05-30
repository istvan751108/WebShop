package org.example.controller.productbyid;

import org.example.model.productbyid.ProductById;
import org.example.service.productbyid.ProductByIdService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping()
public class ProductByIdController {

    private final ProductByIdService service;

    public ProductByIdController(ProductByIdService service) {
        this.service = service;
    }

    @CrossOrigin
    @GetMapping("/products/{id}")
    public ResponseEntity<List<ProductById>> getProdById(@PathVariable int id){
        return new ResponseEntity<>(service.getProdById(id), HttpStatus.OK);
    }
}
