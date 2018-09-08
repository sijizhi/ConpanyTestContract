package com.tongfu.contract.service;

import java.util.List;

import com.tongfu.contract.entity.Product;



/**
 * 产品抽象类
 * @author Sijie Zhi
 *
 */
public interface ProductService {

	public List<Product> allPro() throws Exception;//所有产品
	public boolean deletePro(Product pro)throws Exception;//删除产品
	public boolean savePro(Product pro)throws Exception;//保存产品
	public Product getPro(Product pro)throws Exception;//单个产品
	public boolean modifyPro(Product pro)throws Exception;//修改产品
	
}
