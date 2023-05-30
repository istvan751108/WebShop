package org.example.dao.productq;

import org.example.mapper.productq.ProductQRowMapper;
import org.example.model.productq.ProductQ;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ProductQDaoImpl implements ProductQDao {
    private final NamedParameterJdbcOperations jdbcTemplate;
    private final ProductQRowMapper rowMapper;
    public ProductQDaoImpl(NamedParameterJdbcOperations jdbcTemplate, ProductQRowMapper rowMapper) {
        this.jdbcTemplate = jdbcTemplate;
        this.rowMapper = rowMapper;
    }
    @Override
    public List<ProductQ> getProdSearch(String q) {
        Map<String, Object> paramSet = new HashMap<>();
        paramSet.put("q", q);
        return jdbcTemplate.query("select * from PRODUCTS where TITLE LIKE :q", paramSet, rowMapper);
    }
}
