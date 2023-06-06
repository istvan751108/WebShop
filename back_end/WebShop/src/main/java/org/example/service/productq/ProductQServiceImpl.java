package org.example.service.productq;

import org.example.dao.productq.ProductQDao;
import org.example.model.productq.ProductQ;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductQServiceImpl implements ProductQService {
    private final ProductQDao dao;
    public ProductQServiceImpl(ProductQDao dao) { this.dao = dao;
    }
    @Override
    public List<ProductQ> getProdSearch(String q) { return dao.getProdSearch(q);
    }
}