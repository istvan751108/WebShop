package org.example.service.productbyid;

import org.example.model.productbyid.ProductById;

import java.util.List;

public interface ProductByIdService {
    List<ProductById> getProdById(int id);

}
