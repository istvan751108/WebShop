package org.example.dao.productbyid;

import org.example.mapper.productbyid.ProductByIdRowMapper;
import org.example.model.productbyid.ProductById;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ProductByIdDaoImpl implements ProductByIdDao {
    private final NamedParameterJdbcOperations jdbcTemplate;
    private final ProductByIdRowMapper rowMapper;
    public ProductByIdDaoImpl(NamedParameterJdbcOperations jdbcTemplate, ProductByIdRowMapper rowMapper) {
        this.jdbcTemplate = jdbcTemplate;
        this.rowMapper = rowMapper;
    }
    @Override
    public List<ProductById> getProdById(int id) {
        Map<String, Object> paramSet = new HashMap<>();
        paramSet.put("id", id);
        return jdbcTemplate.query("select * from PRODUCTS where id = :id", paramSet, rowMapper);
    }
}
