package org.example.service.home;

import org.springframework.stereotype.Service;
import org.example.dao.home.HomeDao;
import org.example.model.home.Home;

import java.util.List;

@Service
public class HomeServiceImpl implements HomeService {
    private final HomeDao dao;
    public HomeServiceImpl(HomeDao dao) { this.dao = dao;
    }
    @Override
    public List<Home> getHomes() { return dao.getHomes();
    }
}