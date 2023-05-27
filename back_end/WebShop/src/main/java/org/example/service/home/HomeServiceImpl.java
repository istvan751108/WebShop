package org.example.service.home;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.example.dao.home.HomeDao;
import org.example.model.home.Home;

import java.util.List;

@Service
@Transactional
public class HomeServiceImpl implements HomeService {
    private final HomeDao dao;
    public HomeServiceImpl(HomeDao dao) { this.dao = dao;
    }
    @Override
    @Transactional(readOnly = true)
    public List<Home> getHomes() { return dao.getHomes();
    }
}