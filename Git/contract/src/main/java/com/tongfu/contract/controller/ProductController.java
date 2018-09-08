package com.tongfu.contract.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.json.JSONArray;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tongfu.contract.entity.Product;
import com.tongfu.contract.service.ProductService;

/**
 * 产品接口
 * @author Sijie Zhi
 *
 */
@RestController
@RequestMapping("/pro")
public class ProductController {

	@Resource
	private ProductService productService;//业务层
	
	private Integer globalId;//全局id
	/**
	 * 产品所有信息
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/proList")
	public List<Product> proList() throws Exception{
		List<Product> pros=productService.allPro();
		return pros;//返回产品集合
	}
	
	/**
	 * 删除产品
	 * @param productId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/deletePro")
	public Object deletePro(@RequestParam(value="productId",defaultValue="0") Integer productId) throws Exception{
		Product pro=new Product();
		pro.setProductId(productId);
		HashMap<String, String> map=new HashMap<>();
		if(productService.deletePro(pro)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}
		
		return map;
	}
	
	
	/**
	 * 保存产品信息
	 * @param pro
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/savePro")
	public Object savePro(Product pro) throws Exception{
		System.out.println("============判断接口是否已接收到信息===========createUser "+pro.getCreateDeptName());
		System.out.println("============判断接口是否已接收到信息==========="+pro);
		HashMap<String, String> map=new HashMap<>();
		if(productService.savePro(pro)){//保存
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}
		return map;
	}
	
	/**
	 * 获取单个产品信息
	 * @param productId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/getPro")
	public Product getPro() throws Exception{
		Product pro =new Product();
		if(globalId!=null&&globalId!=0){//判断前端id是否选择了
			pro.setProductId(globalId);
			pro=this.productService.getPro(pro);
		}else{
			pro=new Product();
		}
		
		return pro;
	}
	
	/**
	 * 设置全局id
	 * @param productId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/setGlobalId")
	public Object setGlobalId(@RequestParam(value="productId",defaultValue="0") Integer productId)throws Exception{
		HashMap<String, String> map=new HashMap<>();
		globalId=productId;
		System.out.println("=====globalId======"+globalId);
		map.put("result", "true");
		return  map;
	}
	
	/**
	 * 修改产品
	 * @param pro
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/modifyPro")
	public Object modifyPro(Product pro) throws Exception{
		System.out.println("============判断接口是否已接收到信息===========createUser "+pro.getCreateDeptName());
		System.out.println("============判断接口是否已接收到信息==========="+pro);
		HashMap<String, String> map=new HashMap<>();
		if(productService.modifyPro(pro)){//修改保存
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}
		return map;
	}
	
	
	/**
	 * 获取单个产品信息(给予俞志豪用)
	 * @param productId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/getPro2")
	public Product getPro2(Integer productId) throws Exception{
		Product pro =new Product();
		
		pro.setProductId(productId);
		pro=this.productService.getPro(pro);
		
		
		return pro;
	}
}
