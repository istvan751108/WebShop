package org.example.service.productcategories;

import org.example.dao.productcategories.ProductCategoriesDao;
import org.example.model.productcategories.ProductCategories;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductCategoriesServiceImpl implements ProductCategoriesService {
    private final ProductCategoriesDao dao;
    public ProductCategoriesServiceImpl(ProductCategoriesDao dao) { this.dao = dao;
    }
    @Override
    public List<ProductCategories> getProdCats(int id) { return dao.getProdCats(id);
    }
}