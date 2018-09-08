package com.tongfu.contract.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tongfu.contract.entity.Dept;
import com.tongfu.contract.service.DeptService;


/**
 * 部门表控制层
 * @author Administrator
 *
 */

@RestController
@RequestMapping("/dept")
public class DeptController {
	
	@Resource
	private DeptService deptService;
	private List<Dept> dept;
	private Dept dept1;
	
	@RequestMapping("/getDept")
	public List<Dept> getDept(){
		try {
			dept=deptService.getDept();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dept;
	}
	
	@RequestMapping("/queryDept")
	public Dept queryDept(String indexValue){
		System.out.println("-----------部门编号"+indexValue);
		dept1=new Dept();
		
		dept1.setDeptId(Integer.valueOf(indexValue));
		
		try {
			dept1=deptService.queryById(dept1);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return dept1;
	}
	
	@RequestMapping("/deleteDept")
	public String deleteDept(String indexValue){
		
		String str="";
		int bl=0;
		
		dept1=new Dept();
		
		dept1.setDeptId(Integer.valueOf(indexValue));
		
		try {
			bl=deptService.deleteById(dept1);
			
			if(bl==1){
				str="true";
			}else{
				str="false";
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		System.out.println("8**************数据 "+str);
		return str;
	}
	
	@RequestMapping("/update_saveDept")
	public String update_saveDept(String deptName,String deptId){
		
		String str="";
		int bl=0;
		int c=0;
		dept1=new Dept();
		
		dept1.setDeptId(Integer.valueOf(deptId));
		dept1.setDeptName(deptName);
		
		try {
			
			dept=deptService.getDept();
			
			for(Dept li:dept){
				//判断元素的重复
				if(deptName.equals(li.getDeptName())){
					c=0;
					break;
				}else{
					c=1;
				}
			}
			
			
			if(c==1){
				bl=deptService.update_dept(dept1);
				
				if(bl==1){
					str="true";
				}else{
					str="false";
				}
				
			}else{
				str="false";
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return str;
	}
	
	@RequestMapping("/add_saveDept")
	public String add_saveDept(String deptName){
		
		String str="";
		int c=0;
		int bl=0;
		
		dept1=new Dept();

		dept1.setDeptName(deptName);
		
		try {
			dept=deptService.getDept();
			
			for(Dept li:dept){
				//判断元素的重复
				if(deptName.equals(li.getDeptName())){
					c=0;
					break;
				}else{
					c=1;
				}
			}
			
			
			if(c==1){
				bl=deptService.add_dept(dept1);
				
				if(bl==1){
					str="true";
					
				}else{
					str="false";
					
				}
			}else{
				str="false";
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return str;
	}
}
