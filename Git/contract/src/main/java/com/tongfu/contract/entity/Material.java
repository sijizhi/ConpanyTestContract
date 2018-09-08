package com.tongfu.contract.entity;

import java.math.BigDecimal;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
/**
 * 物料实体类
 * @author Sijie Zhi
 *
 */
public class Material {

	/**
	 * 字段
	 */
	private Integer materialId;//物料id
	private String materialName;//物料名称
	private BigDecimal importPrice;//进货价
	private Integer inventory;//库存量
	private String remarks;//备注
	private String createUser;//创建人
	private String createDeptName;//创建人部门
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date  createDate;//创建时间
	
	private String modifyUser;//修改人
	private String modifyDeptName;//修改部门
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date modifyDate;//修改时间
	
	public Material() {
		// TODO Auto-generated constructor stub
	}

	public Material(Integer materialId, String materialName, BigDecimal importPrice, Integer inventory, String remarks,
			String createUser, String createDeptName, Date createDate, String modifyUser, String modifyDeptName,
			Date modifyDate) {
		super();
		this.materialId = materialId;
		this.materialName = materialName;
		this.importPrice = importPrice;
		this.inventory = inventory;
		this.remarks = remarks;
		this.createUser = createUser;
		this.createDeptName = createDeptName;
		this.createDate = createDate;
		this.modifyUser = modifyUser;
		this.modifyDeptName = modifyDeptName;
		this.modifyDate = modifyDate;
	}

	@Override
	public String toString() {
		return "Material [materialId=" + materialId + ", materialName=" + materialName + ", importPrice=" + importPrice
				+ ", inventory=" + inventory + ", remarks=" + remarks + ", createUser=" + createUser
				+ ", createDeptName=" + createDeptName + ", createDate=" + createDate + ", modifyUser=" + modifyUser
				+ ", modifyDeptName=" + modifyDeptName + ", modifyDate=" + modifyDate + "]";
	}

	public Integer getMaterialId() {
		return materialId;
	}

	public void setMaterialId(Integer materialId) {
		this.materialId = materialId;
	}

	public String getMaterialName() {
		return materialName;
	}

	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}

	public BigDecimal getImportPrice() {
		return importPrice;
	}

	public void setImportPrice(BigDecimal importPrice) {
		this.importPrice = importPrice;
	}

	public Integer getInventory() {
		return inventory;
	}

	public void setInventory(Integer inventory) {
		this.inventory = inventory;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getCreateUser() {
		return createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	public String getCreateDeptName() {
		return createDeptName;
	}

	public void setCreateDeptName(String createDeptName) {
		this.createDeptName = createDeptName;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getModifyUser() {
		return modifyUser;
	}

	public void setModifyUser(String modifyUser) {
		this.modifyUser = modifyUser;
	}

	public String getModifyDeptName() {
		return modifyDeptName;
	}

	public void setModifyDeptName(String modifyDeptName) {
		this.modifyDeptName = modifyDeptName;
	}

	public Date getModifyDate() {
		return modifyDate;
	}

	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}
	
	
	
	
	
}
