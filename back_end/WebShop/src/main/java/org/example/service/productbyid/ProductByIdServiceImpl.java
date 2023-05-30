package org.example.service.productbyid;

import org.example.dao.productbyid.ProductByIdDao;
import org.example.model.productbyid.ProductById;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductByIdServiceImpl implements ProductByIdService {
    private final ProductByIdDao dao;
    public ProductByIdServiceImpl(ProductByIdDao dao) { this.dao = dao;
    }
    @Override
    @Transactional(readOnly = true)
    public List<ProductById> getProdById(int id) { return dao.getProdById(id);
    }
}