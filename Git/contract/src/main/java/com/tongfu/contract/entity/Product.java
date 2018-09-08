package com.tongfu.contract.entity;

import java.math.BigDecimal;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;


import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 产品实体类
 * @author Sijie Zhi
 *
 */
public class Product {
	/**
	 * 字段
	 */
	private Integer productId;//产品id
	private String productName;//产品名称
	private BigDecimal productCost;//产品成本
	private BigDecimal salePrice;//产品建议售价
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
	
	public Product() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public Integer getProductId() {
		return productId;
	}



	public void setProductId(Integer productId) {
		this.productId = productId;
	}



	public String getProductName() {
		return productName;
	}



	public void setProductName(String productName) {
		this.productName = productName;
	}



	public BigDecimal getProductCost() {
		return productCost;
	}



	public void setProductCost(BigDecimal productCost) {
		this.productCost = productCost;
	}



	public BigDecimal getSalePrice() {
		return salePrice;
	}



	public void setSalePrice(BigDecimal salePrice) {
		this.salePrice = salePrice;
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



	public Product(Integer productId, String productName, BigDecimal productCost, BigDecimal salePrice,
			Integer inventory, String remarks, String createUser, String createDeptName, Date createDate,
			String modifyUser, String modifyDeptName, Date modifyDate) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productCost = productCost;
		this.salePrice = salePrice;
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
		return "Product [productId=" + productId + ", productName=" + productName + ", productCost=" + productCost
				+ ", salePrice=" + salePrice + ", inventory=" + inventory + ", remarks=" + remarks + ", createUser="
				+ createUser + ", createDeptName=" + createDeptName + ", createDate=" + createDate + ", modifyUser="
				+ modifyUser + ", modifyDeptName=" + modifyDeptName + ", modifyDate=" + modifyDate + "]";
	}




	
	

}
