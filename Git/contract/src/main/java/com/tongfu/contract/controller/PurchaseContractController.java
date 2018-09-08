package com.tongfu.contract.controller;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tongfu.contract.entity.PurchaseContract;
import com.tongfu.contract.service.PurchaseContractService;


@RestController
@RequestMapping("/pcontract")
public class PurchaseContractController {
	
	@Resource
	private PurchaseContractService purchasecontractService;
	private List<PurchaseContract> pcontracts;
	private PurchaseContract pcontract;
	
	@RequestMapping("/getPurchaseContract")
	public List<PurchaseContract> getPurchaseContract(){
		
		try {
			pcontracts=purchasecontractService.getPcontract();
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return pcontracts;
	}
	
	@RequestMapping("/insertPurchaseContract")
	public String insertPurchaseContract(String createDate,String companyName,
			String companyAddres,String material,String importPrice,
			String importAmount,String contractName,String valueremark,
			String importPeople,String paymoney,String providerId,String createUser) throws ParseException{
		int bl=0;
		String str="";
		pcontract=new PurchaseContract();
		pcontract.setCreateDate(new SimpleDateFormat("yyyy-MM-dd").parse(createDate));
		System.out.println("1");
		pcontract.setProviderName(companyName);
		System.out.println("2");
		pcontract.setProviderAddress(companyAddres);
		System.out.println("3");
		pcontract.setMaterialName(material);
		System.out.println("4");
		pcontract.setPaymentAmount(Double.valueOf(paymoney));
		System.out.println("5");
		pcontract.setRemark(valueremark);
		System.out.println("6");
		pcontract.setContractName(contractName);
		System.out.println("7");
		pcontract.setPrice(Double.valueOf(importPrice));
		System.out.println("7");
		pcontract.setAmount(Integer.valueOf(importAmount));
		System.out.println("8");
		pcontract.setPurchaseUser(importPeople);
		System.out.println("9");
		pcontract.setGetTicketAmount(Double.valueOf(paymoney));
		System.out.println("10");
		pcontract.setProviderId(Integer.valueOf(providerId));
		System.out.println("11");
		pcontract.setCreateUser(createUser);
		System.out.println("12");
		
		double importPrice1=Double.valueOf(importPrice);
		Integer importAmount1=Integer.valueOf(importAmount);
		double totalPrice=importPrice1*importAmount1;
		
		pcontract.setContractTotalPrice(totalPrice);
		
		try {
			System.out.println("进入----"+totalPrice);
			bl=purchasecontractService.insertPurchaseContract(pcontract);
			
			if(bl==1){
				str="true";
			}else{
				str="false";
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return str;
	}
	
	@RequestMapping("/deletePurchaseContractById")
	public String  deletePurchaseContractById(String indexValue){
		String str="";
		int bl=0;
		pcontract=new PurchaseContract();
		pcontract.setPurchaseContractId(Integer.valueOf(indexValue));
		
		try {
			bl=purchasecontractService.deleteById(pcontract);
			
			if(bl==1){
				str="true";
			}else{
				str="false";
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return str;
	}
	
	@RequestMapping("/getPurchaseContractById")
	public PurchaseContract getPurchaseContractById(String result){

		pcontract=new PurchaseContract();
		pcontract.setPurchaseContractId(Integer.valueOf(result));
		try {
			pcontract=purchasecontractService.getPcontractById(pcontract);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return pcontract;
	}
	
	@RequestMapping("/updatePurchaseById")
	public String updatePurchaseById(String modifyUser,String modifydate,String providerId,String contractName,
			String providerAddress,String material,String importPrice,String importAmount,String providerName,
			String importPeople,String paymoney,String value_remark,String result) throws Exception{
		
		System.out.println("---进入更新层"+modifydate);
		String str="";
		pcontract=new PurchaseContract();
		
		pcontract.setModifyUser(modifyUser);
		pcontract.setModifyDate(new SimpleDateFormat("yyyy-MM-dd").parse(modifydate));
		pcontract.setProviderId(Integer.valueOf(providerId));
		pcontract.setProviderAddress(providerAddress);
		pcontract.setMaterialName(material);
		pcontract.setPrice(Double.valueOf(importPrice));
		pcontract.setAmount(Integer.valueOf(importAmount));
		pcontract.setContractName(contractName);
		pcontract.setProviderName(providerName);
		pcontract.setPurchaseUser(importPeople);
		pcontract.setPaymentAmount(Double.valueOf(paymoney));
		pcontract.setGetTicketAmount(Double.valueOf(paymoney));
		//System.out.println("---已付款："+pcontract.getGetTicketAmount());
		pcontract.setRemark(value_remark);
		//System.out.println("----评论--"+pcontract.getRemark());
		pcontract.setPurchaseContractId(Integer.valueOf(result));		
		Double importPrice1=Double.valueOf(importPrice);
		Integer importAmount1=Integer.valueOf(importAmount);
		Double totalPrice=importPrice1*importAmount1;		
		pcontract.setContractTotalPrice(totalPrice);		
		int bl=purchasecontractService.updateById(pcontract);
		
		if(bl==1){
			str="true";
		}else{
			str="false";
		}
		return str;
	}
	
}
