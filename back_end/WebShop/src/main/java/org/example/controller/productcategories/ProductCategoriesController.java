package org.example.controller.productcategories;

import org.example.model.productcategories.ProductCategories;
import org.example.service.productcategories.ProductCategoriesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/products")
public class ProductCategoriesController {

    private final ProductCategoriesService service;

    public ProductCategoriesController(ProductCategoriesService service) {
        this.service = service;
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<ProductCategories>> getProdCats(@RequestParam int catId){
        return new ResponseEntity<>(service.getProdCats(catId), HttpStatus.OK);
    }
}
