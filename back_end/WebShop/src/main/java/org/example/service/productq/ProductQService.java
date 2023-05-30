package org.example.service.productq;

import org.example.model.productq.ProductQ;

import java.util.List;

public interface ProductQService {
    List<ProductQ> getProdSearch(String q);
}
