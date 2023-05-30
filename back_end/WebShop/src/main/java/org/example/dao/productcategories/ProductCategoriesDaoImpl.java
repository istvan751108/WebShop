package org.example.dao.productcategories;

import org.example.mapper.productcategories.ProductCategoriesRowMapper;
import org.example.model.productcategories.ProductCategories;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ProductCategoriesDaoImpl implements ProductCategoriesDao {
    private final NamedParameterJdbcOperations jdbcTemplate;
    private final ProductCategoriesRowMapper rowMapper;
    public ProductCategoriesDaoImpl(NamedParameterJdbcOperations jdbcTemplate, ProductCategoriesRowMapper rowMapper) {
        this.jdbcTemplate = jdbcTemplate;
        this.rowMapper = rowMapper;
    }
    @Override
    public List<ProductCategories> getProdCats(int id) {
        Map<String, Object> paramSet = new HashMap<>();
        paramSet.put("id", id);
        return jdbcTemplate.query("select * from PRODUCTS where catId = :id", paramSet, rowMapper);
    }
}
