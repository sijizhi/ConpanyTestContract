package com.tongfu.contract.entity;

import java.math.BigDecimal;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 销售合同实体类
 * @author Sijie Zhi
 *
 */
public class Salescontract {
	/**
	 * 字段名
	 */
	private Integer salesContractId;//销售合同id
	private String contractName;//销售合同名称
	private String customerName;//客户名称
	private String productName;//产品名称
	private BigDecimal salePrice;//单价
	private Integer amount;//数量
	private BigDecimal contractAmount;//合同总金额
	private BigDecimal invoiceAmount;//开票总金额
	private BigDecimal getMoneyAmount;//收款总金额
	private String accessory;//附件路径
	private String remark;//备注
	private String saleUser;//销售人员
	private String createUser;//创建人
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date createDate;//创建时间
	private String createDeptName;//创建人部门
	private String modifyUser;//修改人
	private String modifyDeptName;//修改部门
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date modifyDate;//修改时间
	
	private String salesApprovalId;//销售审批编号
	

	public Salescontract() {
		// TODO Auto-generated constructor stub
	}


	public Salescontract(Integer salesContractId, String contractName, String customerName, String productName,
			BigDecimal salePrice, Integer amount, BigDecimal contractAmount, BigDecimal invoiceAmount,
			BigDecimal getMoneyAmount, String accessory, String remark, String saleUser, String createUser,
			Date createDate, String createDeptName, String modifyUser, String modifyDeptName, Date modifyDate,
			String salesApprovalId) {
		super();
		this.salesContractId = salesContractId;
		this.contractName = contractName;
		this.customerName = customerName;
		this.productName = productName;
		this.salePrice = salePrice;
		this.amount = amount;
		this.contractAmount = contractAmount;
		this.invoiceAmount = invoiceAmount;
		this.getMoneyAmount = getMoneyAmount;
		this.accessory = accessory;
		this.remark = remark;
		this.saleUser = saleUser;
		this.createUser = createUser;
		this.createDate = createDate;
		this.createDeptName = createDeptName;
		this.modifyUser = modifyUser;
		this.modifyDeptName = modifyDeptName;
		this.modifyDate = modifyDate;
		this.salesApprovalId = salesApprovalId;
	}


	public Integer getSalesContractId() {
		return salesContractId;
	}


	public void setSalesContractId(Integer salesContractId) {
		this.salesContractId = salesContractId;
	}


	public String getContractName() {
		return contractName;
	}


	public void setContractName(String contractName) {
		this.contractName = contractName;
	}


	public String getCustomerName() {
		return customerName;
	}


	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}


	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
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


	public BigDecimal getContractAmount() {
		return contractAmount;
	}


	public void setContractAmount(BigDecimal contractAmount) {
		this.contractAmount = contractAmount;
	}


	public BigDecimal getInvoiceAmount() {
		return invoiceAmount;
	}


	public void setInvoiceAmount(BigDecimal invoiceAmount) {
		this.invoiceAmount = invoiceAmount;
	}


	public BigDecimal getGetMoneyAmount() {
		return getMoneyAmount;
	}


	public void setGetMoneyAmount(BigDecimal getMoneyAmount) {
		this.getMoneyAmount = getMoneyAmount;
	}


	public String getAccessory() {
		return accessory;
	}


	public void setAccessory(String accessory) {
		this.accessory = accessory;
	}


	public String getRemark() {
		return remark;
	}


	public void setRemark(String remark) {
		this.remark = remark;
	}


	public String getSaleUser() {
		return saleUser;
	}


	public void setSaleUser(String saleUser) {
		this.saleUser = saleUser;
	}


	public String getCreateUser() {
		return createUser;
	}


	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}


	public Date getCreateDate() {
		return createDate;
	}


	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}


	public String getCreateDeptName() {
		return createDeptName;
	}


	public void setCreateDeptName(String createDeptName) {
		this.createDeptName = createDeptName;
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


	public String getSalesApprovalId() {
		return salesApprovalId;
	}


	public void setSalesApprovalId(String salesApprovalId) {
		this.salesApprovalId = salesApprovalId;
	}


	@Override
	public String toString() {
		return "Salescontract [salesContractId=" + salesContractId + ", contractName=" + contractName
				+ ", customerName=" + customerName + ", productName=" + productName + ", salePrice=" + salePrice
				+ ", amount=" + amount + ", contractAmount=" + contractAmount + ", invoiceAmount=" + invoiceAmount
				+ ", getMoneyAmount=" + getMoneyAmount + ", accessory=" + accessory + ", remark=" + remark
				+ ", saleUser=" + saleUser + ", createUser=" + createUser + ", createDate=" + createDate
				+ ", createDeptName=" + createDeptName + ", modifyUser=" + modifyUser + ", modifyDeptName="
				+ modifyDeptName + ", modifyDate=" + modifyDate + ", salesApprovalId=" + salesApprovalId + "]";
	}


	


	
	
	
}
