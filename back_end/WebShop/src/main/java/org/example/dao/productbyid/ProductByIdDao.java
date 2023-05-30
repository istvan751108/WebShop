package org.example.dao.productbyid;

import org.example.model.productbyid.ProductById;

import java.util.List;

public interface ProductByIdDao {
    List<ProductById> getProdById(int id);
}
