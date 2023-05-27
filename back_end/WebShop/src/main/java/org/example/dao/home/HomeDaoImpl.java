package org.example.dao.home;

import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.example.mapper.home.HomeRowMapper;
import org.example.model.home.Home;

import java.util.List;

@Repository
public class HomeDaoImpl implements HomeDao {
    private final NamedParameterJdbcOperations jdbcTemplate;
    private final HomeRowMapper rowMapper;
    public HomeDaoImpl(NamedParameterJdbcOperations jdbcTemplate, HomeRowMapper rowMapper) {
        this.jdbcTemplate = jdbcTemplate;
        this.rowMapper = rowMapper;
    }
    @Override
    public List<Home> getHomes() {
        return jdbcTemplate.query("select * from CATEGORIES", rowMapper);
    }
}
