package org.example.mapper.productcategories;

import org.example.model.productcategories.ProductCategories;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class ProductCategoriesRowMapper implements RowMapper<ProductCategories> {

    @Override
    public ProductCategories mapRow(ResultSet rs, int rowNum) throws SQLException {
        ProductCategories prodCat = new ProductCategories();
        prodCat.setId(rs.getLong("id"));
        prodCat.setCatId(rs.getInt("catId"));
        prodCat.setTitle(rs.getString("title"));
        prodCat.setProductCode(rs.getString("productCode"));
        prodCat.setImage(rs.getString("image"));
        prodCat.setPrice(rs.getInt("price"));
        prodCat.setSku(rs.getString("sku"));
        prodCat.setDescription(rs.getString("description"));
        prodCat.setStock(rs.getInt("stock"));
        return prodCat;
    }

}
