package com.tongfu.contract.service;

import java.util.List;

import com.tongfu.contract.entity.Dept;



public interface DeptService {
	//查询所有部门
	public List<Dept> getDept()throws Exception;
	
	//按部门编号查询
	public Dept queryById(Dept dept)throws Exception;
	
	//根据Id删除部门信息
	public int deleteById(Dept dept)throws Exception;
	
	//更新部门信息
	public int update_dept(Dept dept)throws Exception;
	
	//添加部门信息
	public int add_dept(Dept dept)throws Exception;

}
