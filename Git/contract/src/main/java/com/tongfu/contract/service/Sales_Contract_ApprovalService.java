package com.tongfu.contract.service;

import java.util.List;

import com.tongfu.contract.entity.Sales_Contract_Approval;

/**
 * 销售合同审批抽象类
 * @author Administrator
 *
 */
public interface Sales_Contract_ApprovalService {
	public List<Sales_Contract_Approval> allApproval() throws Exception;//所有销售合同审批信息	
	public List<Sales_Contract_Approval> deptIdApproval(Sales_Contract_Approval approval) throws Exception;//根据部门显示销售合同审批信息	
	public boolean addApproval(Sales_Contract_Approval approval) throws Exception;//添加销售合同审批
	public Sales_Contract_Approval getOne(Sales_Contract_Approval approval)throws Exception;//返回单个销售合同审批信息
	public boolean modifyApproval(Sales_Contract_Approval approval)throws Exception;//修改销售合同审批状态
}
