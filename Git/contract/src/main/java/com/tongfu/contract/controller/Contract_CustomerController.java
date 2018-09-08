package com.tongfu.contract.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tongfu.contract.entity.Contract_Customer;
import com.tongfu.contract.service.Contract_CustomerService;

/**
 * 客户管理控制层
 * @author Administrator
 *
 */
@RestController
@RequestMapping("/customer")
public class Contract_CustomerController {
	@Resource
	private Contract_CustomerService contract_CustomerService;//引用业务层
	
	@RequestMapping("/allCustomer")
	public List<Contract_Customer> allCustomer() throws Exception{
		List<Contract_Customer> allCustomer = contract_CustomerService.allCustomer();
		return allCustomer;
	}
	
	@RequestMapping("/delCustomer")
	public Object delCustomer(@RequestParam(value="customerId") Integer customerId) throws  Exception{
		Map<String,Object>map = new HashMap<String,Object>();
		Contract_Customer customer = new Contract_Customer();
		customer.setCustomerId(customerId);
		if(contract_CustomerService.delCustomer(customer)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}		
		return map;
	}
	
	@RequestMapping("/addCustomer")
	public Object addCustomer(Contract_Customer customer) throws Exception{
		Map<String,Object>map = new HashMap<String,Object>();
		Contract_Customer addcustomer = new Contract_Customer();
		addcustomer.setCompanyName(customer.getCompanyName());
		addcustomer.setCompanyAddres(customer.getCompanyAddres());
		addcustomer.setEmail(customer.getEmail());
		addcustomer.setLinkMan(customer.getLinkMan());
		addcustomer.setLinkManPhone(customer.getLinkManPhone());
		addcustomer.setRemarks(customer.getRemarks());
		addcustomer.setCreateUser(customer.getCreateUser());
		addcustomer.setCreateDeptName(customer.getCreateDeptName());
		if(contract_CustomerService.addCustomer(addcustomer)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}		
		return map;
	}
	/**
	 * 返回单个客户修改信息
	 * @param customerId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryoneCustomer")
	public Contract_Customer queryoneCustomer(@RequestParam(value="customerId",required=true)Integer customerId) throws Exception{
		Contract_Customer customer = new Contract_Customer();
		customer.setCustomerId(customerId);
		customer = contract_CustomerService.getOne(customer);
		return customer;
	}
	
	@RequestMapping("/modifyCustomer")
	public Object modifyCustomer(Contract_Customer customer) throws Exception{
		Map<String,Object>map = new HashMap<String,Object>();
		Contract_Customer modifycustomer = new Contract_Customer();
		modifycustomer.setCompanyName(customer.getCompanyName());
		modifycustomer.setCompanyAddres(customer.getCompanyAddres());
		modifycustomer.setEmail(customer.getEmail());
		modifycustomer.setLinkMan(customer.getLinkMan());
		modifycustomer.setLinkManPhone(customer.getLinkManPhone());
		modifycustomer.setRemarks(customer.getRemarks());
		modifycustomer.setModifyUser(customer.getModifyUser());
		modifycustomer.setModifyDeptName(customer.getModifyDeptName());
		modifycustomer.setCustomerId(customer.getCustomerId());
		if(contract_CustomerService.modifyCustomer(modifycustomer)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}	
		return map;
	}
	
 
}
