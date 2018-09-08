package com.tongfu.contract.service;

import java.util.List;

import com.tongfu.contract.entity.Salescontract;

/**
 * 销售合同业务接口
 * @author Sijie Zhi
 *
 */
public interface SalescontractService {

	public List<Salescontract> saleList() throws Exception;//所有合同
	public boolean deleteSale(Salescontract sale) throws Exception;//所有合同
	public boolean addSale(Salescontract sale) throws Exception;//添加合同
	public boolean modifySale(Salescontract sale) throws Exception;//更新合同
	public Salescontract getSale(Salescontract sale) throws Exception;//单个合同
}
