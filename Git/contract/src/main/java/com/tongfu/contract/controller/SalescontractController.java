package com.tongfu.contract.controller;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tongfu.contract.entity.Salescontract;
import com.tongfu.contract.service.SalescontractService;

/**
 * 销售合同接口
 * @author Sijie Zhi
 *
 */
@RestController
@RequestMapping("/sales")
public class SalescontractController {

	@Resource
	private SalescontractService salescontractService;//销售业务
	
	/**
	 * 销售合同信息
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/saleList")
	public List<Salescontract> saleList() throws Exception{
		
		return salescontractService.saleList();
	}
	
	/**
	 * 删除销售合同
	 * @param salesContractId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/deleteSale")
	public Object deleteSale(@RequestParam(value="salesContractId",
			defaultValue="0") Integer salesContractId) throws Exception{
		HashMap<String, String> map=new HashMap<>();
		Salescontract sale=new Salescontract();
		sale.setSalesContractId(salesContractId);
		if(this.salescontractService.deleteSale(sale)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}
		return map;
	}
	
	
	
	/**
	 * 添加销售合同
	 * @param sale
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addSale")
	public Object addSale(Salescontract sale)throws Exception{
		HashMap<String, String> map=new HashMap<>();
		System.out.println("============================"+sale);
		if(this.salescontractService.addSale(sale)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}
		return map;
	}
	
	/**
	 * 单个销售合同
	 * @param salesContractId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/getSale")
	public Salescontract getSale(@RequestParam(value="salesContractId",
		defaultValue="0") Integer salesContractId) throws Exception{
		Salescontract sale=new Salescontract();
		sale.setSalesContractId(salesContractId);
		return salescontractService.getSale(sale);
	}
	
	
	/**
	 * 修改销售合同
	 * @param sale
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/modifySale")
	public Object modifySale(Salescontract sale)throws Exception{
		HashMap<String, String> map=new HashMap<>();
		System.out.println("============================"+sale);
		if(this.salescontractService.modifySale(sale)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}
		return map;
	}
	
}
