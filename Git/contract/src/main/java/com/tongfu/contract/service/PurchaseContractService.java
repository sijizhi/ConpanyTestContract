package com.tongfu.contract.service;

import java.util.List;

import com.tongfu.contract.entity.PurchaseContract;

public interface PurchaseContractService {
	//查询采购合同的信息
	public List<PurchaseContract> getPcontract()throws Exception;
	
	//插入采购合同的信息
	public int insertPurchaseContract(PurchaseContract pcontract)throws Exception;
	
	//根据id查询采购合同查询
	public PurchaseContract getPcontractById(PurchaseContract pcontract)throws Exception;
	
	//根据id删除信息
	public int deleteById(PurchaseContract pcontract)throws Exception;
	
	//根据id更新数据
	public int updateById(PurchaseContract pcontract)throws Exception;

}
