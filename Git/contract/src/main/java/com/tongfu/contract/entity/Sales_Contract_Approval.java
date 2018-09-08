package com.tongfu.contract.entity;

import java.math.BigDecimal;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 销售合同审批实体
 * @author Administrator
 *
 */
public class Sales_Contract_Approval {
	private Integer salesApprovalId;//审批ID
	private BigDecimal salePrice;//真实售价
	private Integer amount;//需求量
	private BigDecimal totalSales;//总额 
	private Integer approvalStatus;//审批状态
	private Integer accessory;//审批附件
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date createDate;//创建日期
	private String createUser;//创建人
	private String remarks;//备注
	/**
	 * 额外属性
	 */
	private String companyName;//公司名称
	private String productName;//产品名称
	private BigDecimal cost;//成本
	private BigDecimal price;//建议售价

	public Sales_Contract_Approval() {
		// TODO Auto-generated constructor stub
	}

	public Sales_Contract_Approval(Integer salesApprovalId,
			BigDecimal salePrice, Integer amount, BigDecimal totalSales,
			Integer approvalStatus, Integer accessory, Date createDate,
			String createUser, String remarks, String companyName,
			String productName, BigDecimal cost, BigDecimal price) {
		super();
		this.salesApprovalId = salesApprovalId;
		this.salePrice = salePrice;
		this.amount = amount;
		this.totalSales = totalSales;
		this.approvalStatus = approvalStatus;
		this.accessory = accessory;
		this.createDate = createDate;
		this.createUser = createUser;
		this.remarks = remarks;
		this.companyName = companyName;
		this.productName = productName;
		this.cost = cost;
		this.price = price;
	}

	public Integer getSalesApprovalId() {
		return salesApprovalId;
	}

	public void setSalesApprovalId(Integer salesApprovalId) {
		this.salesApprovalId = salesApprovalId;
	}

	public BigDecimal getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(BigDecimal salePrice) {
		this.salePrice = salePrice;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	public BigDecimal getTotalSales() {
		return totalSales;
	}

	public void setTotalSales(BigDecimal totalSales) {
		this.totalSales = totalSales;
	}

	public Integer getApprovalStatus() {
		return approvalStatus;
	}

	public void setApprovalStatus(Integer approvalStatus) {
		this.approvalStatus = approvalStatus;
	}

	public Integer getAccessory() {
		return accessory;
	}

	public void setAccessory(Integer accessory) {
		this.accessory = accessory;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getCreateUser() {
		return createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public BigDecimal getCost() {
		return cost;
	}

	public void setCost(BigDecimal cost) {
		this.cost = cost;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	

}