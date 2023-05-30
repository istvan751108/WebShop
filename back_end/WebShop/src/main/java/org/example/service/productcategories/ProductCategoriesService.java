package org.example.service.productcategories;

import org.example.model.productcategories.ProductCategories;

import java.util.List;

public interface ProductCategoriesService {
    List<ProductCategories> getProdCats(int id);
}
