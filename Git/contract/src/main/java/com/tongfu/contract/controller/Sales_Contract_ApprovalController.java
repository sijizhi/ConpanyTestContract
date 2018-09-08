package com.tongfu.contract.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tongfu.contract.entity.Contract_Provider;
import com.tongfu.contract.entity.Sales_Contract_Approval;
import com.tongfu.contract.service.Sales_Contract_ApprovalService;

/**
 * 销售合同审批管理层
 * @author Administrator
 *
 */
@RestController
@RequestMapping("/approval")
public class Sales_Contract_ApprovalController {
	@Resource
	private Sales_Contract_ApprovalService sales_Contract_ApprovalService;//引用业务层
	/**
	 * 全部销售合同审批
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/allApproval")
	public List<Sales_Contract_Approval> allApproval() throws Exception{
		List<Sales_Contract_Approval> allApproval = sales_Contract_ApprovalService.allApproval();
		return allApproval;
	}
	/**
	 * 添加销售合同审批
	 * @param approval
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addApproval")
	public Object addApproval(Sales_Contract_Approval approval) throws Exception{
		Map<String,Object>map = new HashMap<String,Object>();
		Sales_Contract_Approval addapproval = new Sales_Contract_Approval();
		addapproval.setSalePrice(approval.getSalePrice());
		addapproval.setAmount(approval.getAmount());
		addapproval.setTotalSales(approval.getTotalSales());
		addapproval.setCreateUser(approval.getCreateUser());
		addapproval.setCompanyName(approval.getCompanyName());
		addapproval.setProductName(approval.getProductName());
		addapproval.setCost(approval.getCost());
		addapproval.setPrice(approval.getPrice());
		addapproval.setRemarks(approval.getRemarks());
		if(sales_Contract_ApprovalService.addApproval(addapproval)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}		
		return map;
	}
	
	@RequestMapping("/queryoneApproval")
	public Sales_Contract_Approval queryoneApproval(@RequestParam(value="salesApprovalId",required=true)Integer salesApprovalId) throws Exception{
		Sales_Contract_Approval approval = new Sales_Contract_Approval();
		approval.setSalesApprovalId(salesApprovalId);
		approval = sales_Contract_ApprovalService.getOne(approval);
		return approval;
	}
	
	@RequestMapping("/modifyApproval")
	public Object modifyApproval(@RequestParam(value="salesApprovalId",required=true)Integer salesApprovalId,@RequestParam(value="approvalStatus",required=true)Integer approvalStatus)throws Exception{
		Map<String,Object>map = new HashMap<String,Object>();
		Sales_Contract_Approval modifyapproval = new Sales_Contract_Approval();
		modifyapproval.setSalesApprovalId(salesApprovalId);
		modifyapproval.setApprovalStatus(approvalStatus);
		if(sales_Contract_ApprovalService.modifyApproval(modifyapproval)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}
		return map;
	}
	
	@RequestMapping("/deptIdApproval")
	public List<Sales_Contract_Approval> deptIdApproval(@RequestParam(value="approvalStatus",required=true)Integer approvalStatus) throws Exception{
		Sales_Contract_Approval deptIdapproval = new Sales_Contract_Approval();
		deptIdapproval.setApprovalStatus(approvalStatus);
		List<Sales_Contract_Approval> approval = sales_Contract_ApprovalService.deptIdApproval(deptIdapproval);
		return approval;
	} 

}
