package com.tongfu.contract.service;

import java.util.List;

import com.tongfu.contract.entity.Contract_Provider;

/**
 * 供应商抽象类
 * @author Administrator
 *
 */
public interface Contract_ProviderService {
	public List<Contract_Provider> allProvider() throws Exception;//所有供应商信息	
	public boolean delProvider(Contract_Provider provider) throws Exception;//删除选中供应商信息
	public boolean addProvider(Contract_Provider provider) throws Exception;//添加供应商信息
	public Contract_Provider getOne(Contract_Provider provider) throws Exception;//获取单个供应商信息
	public boolean modifyProvider(Contract_Provider provider) throws Exception;//修改供应商信息

}
