package org.example.dao.productcategories;

import org.example.model.productcategories.ProductCategories;

import java.util.List;

public interface ProductCategoriesDao {
    List<ProductCategories> getProdCats(int id);
}
