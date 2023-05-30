package org.example.mapper.productq;

import org.example.model.productq.ProductQ;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class ProductQRowMapper implements RowMapper<ProductQ> {

    @Override
    public ProductQ mapRow(ResultSet rs, int rowNum) throws SQLException {
        ProductQ prodSearch = new ProductQ();
        prodSearch.setId(rs.getLong("id"));
        prodSearch.setCatId(rs.getInt("catId"));
        prodSearch.setTitle(rs.getString("title"));
        prodSearch.setProductCode(rs.getString("productCode"));
        prodSearch.setImage(rs.getString("image"));
        prodSearch.setPrice(rs.getInt("price"));
        prodSearch.setSku(rs.getString("sku"));
        prodSearch.setDescription(rs.getString("description"));
        prodSearch.setStock(rs.getInt("stock"));
        return prodSearch;
    }
}
