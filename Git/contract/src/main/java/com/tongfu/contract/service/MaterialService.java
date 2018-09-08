package com.tongfu.contract.service;

import java.util.List;

import com.tongfu.contract.entity.Material;
/**
 * 物料抽象类
 * @author Sijie Zhi
 *
 */
public interface MaterialService {
	
	public List<Material> allMats() throws Exception;//所有物料
	public boolean deleteMat(Material mat)throws Exception;//删除物料
	public boolean addMat(Material mat)throws Exception;//添加物料
	public boolean modifyMat(Material mat)throws Exception;//修改物料
	public Material getMat(Material mat) throws Exception;//单个物料
	

}
