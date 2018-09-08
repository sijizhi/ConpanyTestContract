package com.tongfu.contract.service;

import java.util.List;

import com.tongfu.contract.entity.Rolers;

public interface RolerService {
	
	//查询角色类型
	public List<Rolers> getRolers()throws Exception;

}
