package com.tongfu.contract.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.tongfu.contract.entity.Material;
import com.tongfu.contract.entity.Product;
import com.tongfu.contract.service.MaterialService;
/**
 * 物料业务层
 * @author Sijie Zhi
 *
 */

@Service("materialService")
public class MaterialServiceImpl implements MaterialService {

	String sql ="";
	@Autowired
	private JdbcTemplate jdbcTemplate;
	private Material mat;
	
	
	/**
	 * 所有物料
	 */
	@Override
	public List<Material> allMats() throws Exception {
		List<Material> list;
		sql="select * from Contract_material order by MaterialId desc";
		RowMapper<Material> rowMapper=new BeanPropertyRowMapper<Material>(Material.class);
		list=this.jdbcTemplate.query(sql, rowMapper);
		return list;
	}
	
	
	/**
	 * 删除物料
	 */
	@Override
	public boolean deleteMat(Material mat) throws Exception {
		boolean bl=false;
		
		try {
			sql="delete from Contract_material where MaterialId=?";
			this.jdbcTemplate.update(sql,mat.getMaterialId());//执行删除
			bl=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return bl;
	}


	/**
	 * 添加物料
	 */
	@Override
	public boolean addMat(Material mat) throws Exception {
		boolean bl=false;
		
		try {
			sql="insert into Contract_material(materialId,materialName,importPrice,"
					+ "inventory,remarks,createUser,createDeptName,createDate) "
					+ "values(materialId.Nextval,?,?,?,?,?,?,?)";
			this.jdbcTemplate.update(sql,mat.getMaterialName(),mat.getImportPrice(),
					mat.getInventory(),mat.getRemarks(),mat.getCreateUser(),mat.getCreateDeptName(),
					mat.getCreateDate());//执行添加
			bl=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return bl;
	}


	/**
	 * 修改物料
	 */
	@Override
	public boolean modifyMat(Material mat) throws Exception {
		boolean bl=false;
		
		try {
			sql="update Contract_material set materialName=?,importPrice=?,inventory=?"
					+ ",remarks=?,modifyUser=?,modifyDeptName=?,modifyDate=? "
					+ "where materialId=?";
			this.jdbcTemplate.update(sql,mat.getMaterialName(),mat.getImportPrice(),
					mat.getInventory(),mat.getRemarks(),mat.getModifyUser(),mat.getModifyDeptName(),
					mat.getModifyDate(),mat.getMaterialId());//执行修改
			bl=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return bl;
	}


	/**
	 * 单个物料
	 */
	@Override
	public Material getMat(Material mat) throws Exception {
		sql="select * from Contract_material where materialId=?";
		RowMapper<Material> rowMapper=new BeanPropertyRowMapper<Material>(Material.class);
		mat=this.jdbcTemplate.queryForObject(sql, rowMapper,mat.getMaterialId());
		return mat;
	}
	
	

}
