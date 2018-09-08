package com.tongfu.contract.controller;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tongfu.contract.entity.Material;
import com.tongfu.contract.entity.Product;
import com.tongfu.contract.service.MaterialService;

/**
 * 物料接口
 * @author Sijie Zhi
 *
 */
@RestController
@RequestMapping("/mat")
public class MaterialController {

	@Resource
	private MaterialService materialService;
	
	private Integer globalId;//全局id
	
	/**
	 * 所有物料信息
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/matList")
	public List<Material> matList() throws Exception{
		List<Material> list=this.materialService.allMats();
		return list;
	}
	
	
	
	/**
	 * 删除
	 * @param materialId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/deleteMat")
	public Object deletePro(@RequestParam(value="materialId",defaultValue="0") Integer materialId) throws Exception{
		Material mat=new Material();
		mat.setMaterialId(materialId);
		HashMap<String, String> map=new HashMap<>();
		if(this.materialService.deleteMat(mat)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}
		
		return map;
	}
	
	
	/**
	 * 添加物料
	 * @param mat
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addMat")
	public Object addMat(Material mat) throws Exception{
		HashMap<String, String> map=new HashMap<>();
		System.out.println("=========添加==========="+mat);
		if(this.materialService.addMat(mat)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}
		
		return map;
	}
	
	
	/**
	 * 设置全局id
	 * @param productId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/setGlobalId")
	public Object setGlobalId(@RequestParam(value="materialId",defaultValue="0") Integer materialId)throws Exception{
		HashMap<String, String> map=new HashMap<>();
		globalId=materialId;
		System.out.println("=====globalId======"+globalId);
		map.put("result", "true");
		return  map;
	}
	
	
	/**
	 * 查看单个物料
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/getMat")
	public Material getMat() throws Exception{
		Material mat=new Material();
		if(globalId!=null&&globalId!=0){//判断前端id是否选择了
			mat.setMaterialId(globalId);
			mat=this.materialService.getMat(mat);
		}
		
		return mat;
	}
	
	
	/**
	 * 修改物料
	 * @param mat
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/modifyMat")
	public Object modifyMat(Material mat) throws Exception{
		HashMap<String, String> map=new HashMap<>();
		System.out.println("=========修改==========="+mat);
		if(this.materialService.modifyMat(mat)){
			map.put("result", "true");
		}else{
			map.put("result", "false");
		}
		
		return map;
	}
	
}
