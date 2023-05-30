package org.example.mapper.productbyid;

import org.example.model.productbyid.ProductById;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class ProductByIdRowMapper implements RowMapper<ProductById> {

    @Override
    public ProductById mapRow(ResultSet rs, int rowNum) throws SQLException {
        ProductById prodCat = new ProductById();
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
