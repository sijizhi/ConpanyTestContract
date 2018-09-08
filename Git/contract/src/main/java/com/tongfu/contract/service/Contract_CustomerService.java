package com.tongfu.contract.service;

import java.util.List;

import com.tongfu.contract.entity.Contract_Customer;
import com.tongfu.contract.entity.Users;

/**
 * 客户信息抽象类
 * @author Administrator
 *
 */
public interface Contract_CustomerService {
	public List<Contract_Customer> allCustomer() throws Exception;//所有客户信息	
	public boolean delCustomer(Contract_Customer customer) throws Exception;//删除选中客户信息
	public boolean addCustomer(Contract_Customer customer) throws Exception;//添加客户信息
	public Contract_Customer getOne(Contract_Customer customer) throws Exception;//获取单个客户信息
	public boolean modifyCustomer(Contract_Customer customer) throws Exception;//修改客户信息
}
