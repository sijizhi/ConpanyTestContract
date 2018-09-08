package com.tongfu.contract.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tongfu.contract.entity.Contract_Customer;
import com.tongfu.contract.entity.Contract_Provider;
import com.tongfu.contract.service.Contract_ProviderService;

/**
 * 供应商管理层
 * @author Administrator
 *
 */
@RestController
@RequestMapping("/provider")
public class Contract_ProviderController {
	@Resource
	private Contract_ProviderService contract_ProviderService;//引用业务层
	
	@RequestMapping("/allProvider")
	public List<Contract_Provider> allCustomer() throws Exception{
		List<Contract_Provider> allCustomer = contract_ProviderService.allProvider();
		return allCustomer;
		
	}
	
	@RequestMapping("/delProvider")
	public Object delProvider(@RequestParam(value="providerId") Integer providerId) throws  Exception{
		Map<String,Object>map = new HashMap<String,Object>();
		Contract_Provider provider = new Contract_Provider();
		provider.setProviderId(providerId);
		if(contract_ProviderService.delProvider(provider)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}		
		return map;
	}
	
	@RequestMapping("/addProvider")
	public Object addCustomer(Contract_Provider provider) throws Exception{
		Map<String,Object>map = new HashMap<String,Object>();
		Contract_Provider addprovider = new Contract_Provider();
		addprovider.setCompanyName(provider.getCompanyName());
		addprovider.setCompanyAddres(provider.getCompanyAddres());
		addprovider.setEmail(provider.getEmail());
		addprovider.setLinkMan(provider.getLinkMan());
		addprovider.setLinkManPhone(provider.getLinkManPhone());
		addprovider.setRemarks(provider.getRemarks());
		addprovider.setCreateUser(provider.getCreateUser());
		addprovider.setCreateDeptName(provider.getCreateDeptName());
		if(contract_ProviderService.addProvider(addprovider)){
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
	@RequestMapping("/queryoneProvider")
	public Contract_Provider queryoneProvider(@RequestParam(value="providerId",required=true)Integer providerId) throws Exception{
		Contract_Provider provider = new Contract_Provider();
		provider.setProviderId(providerId);
		provider = contract_ProviderService.getOne(provider);
		return provider;
	}
	
	@RequestMapping("/modifyProvider")
	public Object modifyProvider(Contract_Provider provider) throws Exception{
		Map<String,Object>map = new HashMap<String,Object>();
		Contract_Provider modifyprovider = new Contract_Provider();
		modifyprovider.setCompanyName(provider.getCompanyName());
		modifyprovider.setCompanyAddres(provider.getCompanyAddres());
		modifyprovider.setEmail(provider.getEmail());
		modifyprovider.setLinkMan(provider.getLinkMan());
		modifyprovider.setLinkManPhone(provider.getLinkManPhone());
		modifyprovider.setRemarks(provider.getRemarks());
		modifyprovider.setModifyUser(provider.getModifyUser());
		modifyprovider.setModifyDeptName(provider.getModifyDeptName());
		modifyprovider.setProviderId(provider.getProviderId());
		if(contract_ProviderService.modifyProvider(modifyprovider)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}	
		return map;
	}
}
