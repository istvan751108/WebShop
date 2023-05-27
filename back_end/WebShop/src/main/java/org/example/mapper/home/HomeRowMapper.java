package org.example.mapper.home;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
import org.example.model.home.Home;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class HomeRowMapper implements RowMapper<Home> {

    @Override
    public Home mapRow(ResultSet rs, int rowNum) throws SQLException {
        Home home = new Home();
        home.setId(rs.getLong("id"));
        home.setTitle(rs.getString("title"));
        return home;
    }

}
