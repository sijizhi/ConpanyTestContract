package com.tongfu.contract.service.impl;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.tongfu.contract.entity.Product;
import com.tongfu.contract.service.ProductService;
/**
 * 产品业务层
 * @author Sijie Zhi
 *
 */
@Service("productService")
public class ProductServiceImpl implements ProductService {

	String sql ="";
	@Autowired
	private JdbcTemplate jdbcTemplate;
	private Product pro;
	
	/**
	 * 所以产品信息
	 */
	@Override
	public List<Product> allPro() throws Exception {
		System.out.println("==============ProductService 查询==============================");
		List<Product> list;
		sql="select * from Contract_product order by productId desc";
		RowMapper<Product> rowMapper=new BeanPropertyRowMapper<Product>(Product.class);
		list=jdbcTemplate.query(sql, rowMapper);//查询
	
		return list;//返回产品集合
	}

	/**
	 * 删除产品
	 */
	@Override
	public boolean deletePro(Product pro) throws Exception {
		boolean bl=false;
		System.out.println("==============ProductService 删除==============================");
		sql="delete from Contract_product where productId=?";
		try {
			jdbcTemplate.update(sql,pro.getProductId());//执行删除
			bl=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return bl;
	}

	/**
	 * 保存产品信息
	 */
	@Override
	public boolean savePro(Product pro) throws Exception {
		boolean bl=false;
		System.out.println("==============ProductService 保存==============================");
		sql="insert into Contract_product(productId,productName,productCost,salePrice,inventory,remarks,createUser,createDeptName,createDate) "
				+ "values(productId.Nextval,?,?,?,?,?,?,?,?)";
		try {
			jdbcTemplate.update(sql,pro.getProductName(),pro.getProductCost(),pro.getSalePrice(),pro.getInventory(),
					pro.getRemarks(),pro.getCreateUser(),pro.getCreateDeptName(),pro.getCreateDate());
			bl=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return bl;
	}

	/**
	 * 单个产品
	 */
	@Override
	public Product getPro(Product pro) throws Exception {
		System.out.println("==============ProductService 查询打个==============================");
		List<Product> list;
		sql="select * from Contract_product where productId=?";
		RowMapper<Product> rowMapper=new BeanPropertyRowMapper<Product>(Product.class);
		pro=jdbcTemplate.queryForObject(sql, rowMapper,pro.getProductId());
	
		return pro;//返回产品集合
	}

	/**
	 * 更新产品
	 */
	@Override
	public boolean modifyPro(Product pro) throws Exception {
		boolean bl=false;
		System.out.println("==============ProductService 修改==============================");
		sql="update  Contract_product set productName=?,productCost=?,salePrice=?,inventory=?,"
				+ "remarks=?,modifyUser=?,modifyDeptName=?,modifyDate=? where productId=?";
		try {
			jdbcTemplate.update(sql,pro.getProductName(),pro.getProductCost(),pro.getSalePrice(),pro.getInventory(),
					pro.getRemarks(),pro.getModifyUser(),pro.getModifyDeptName(),pro.getModifyDate(),pro.getProductId());
			bl=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return bl;
	}
	
	
	

}
