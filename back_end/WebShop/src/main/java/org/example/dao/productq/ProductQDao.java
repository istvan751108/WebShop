package org.example.dao.productq;

import org.example.model.productq.ProductQ;

import java.util.List;

public interface ProductQDao {
    List<ProductQ> getProdSearch(String q);
}
