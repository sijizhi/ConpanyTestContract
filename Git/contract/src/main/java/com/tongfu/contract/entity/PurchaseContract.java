package com.tongfu.contract.entity;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

public class PurchaseContract {
    
	private Integer purchaseContractId;//购买合同的id
	private String contractName;//合同名称
	private String providerName;//供应商
	private String providerAddress;//供应商地址
	private String materialName;//物料名
	private Double price;//采购价格
	private Integer amount;//采购数量
	private Double contractTotalPrice;//采购合同总价格
	private Double getTicketAmount;//已收票据金额
	private Double paymentAmount;//已付款金额
	private String accessory;//合同附件（扫描归档）
	private String purchaseUser;//采购人
	private String createUser;//合同登记人
	private String createDept;//创建部门
	@JsonFormat(pattern="yyyy-MM-dd")
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createDate;//创建日期
	private String modifyUser;//修改人
	@JsonFormat(pattern="yyyy-MM-dd")
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date modifyDate;//修改日期
	private String remark;//评论
	private Integer providerId;//供应商编号
	
	public PurchaseContract() {
		// TODO Auto-generated constructor stub
	}

	

	public Integer getProviderId() {
		return providerId;
	}



	public void setProviderId(Integer providerId) {
		this.providerId = providerId;
	}



	public PurchaseContract(Integer purchaseContractId, String contractName,
			String providerName, String providerAddress, String materialName,
			Double price, Integer amount, Double contractTotalPrice,
			Double getTicketAmount, Double paymentAmount, String accessory,
			String purchaseUser, String createUser, String createDept,
			Date createDate, String modifyUser, Date modifyDate, String remark,
			Integer providerId) {
		super();
		this.purchaseContractId = purchaseContractId;
		this.contractName = contractName;
		this.providerName = providerName;
		this.providerAddress = providerAddress;
		this.materialName = materialName;
		this.price = price;
		this.amount = amount;
		this.contractTotalPrice = contractTotalPrice;
		this.getTicketAmount = getTicketAmount;
		this.paymentAmount = paymentAmount;
		this.accessory = accessory;
		this.purchaseUser = purchaseUser;
		this.createUser = createUser;
		this.createDept = createDept;
		this.createDate = createDate;
		this.modifyUser = modifyUser;
		this.modifyDate = modifyDate;
		this.remark = remark;
		this.providerId = providerId;
	}



	public Integer getPurchaseContractId() {
		return purchaseContractId;
	}

	public void setPurchaseContractId(Integer purchaseContractId) {
		this.purchaseContractId = purchaseContractId;
	}

	public String getContractName() {
		return contractName;
	}

	public void setContractName(String contractName) {
		this.contractName = contractName;
	}

	public String getProviderName() {
		return providerName;
	}

	public void setProviderName(String providerName) {
		this.providerName = providerName;
	}

	public String getProviderAddress() {
		return providerAddress;
	}

	public void setProviderAddress(String providerAddress) {
		this.providerAddress = providerAddress;
	}

	public String getMaterialName() {
		return materialName;
	}

	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	public Double getContractTotalPrice() {
		return contractTotalPrice;
	}

	public void setContractTotalPrice(Double contractTotalPrice) {
		this.contractTotalPrice = contractTotalPrice;
	}

	public Double getGetTicketAmount() {
		return getTicketAmount;
	}

	public void setGetTicketAmount(Double getTicketAmount) {
		this.getTicketAmount = getTicketAmount;
	}

	public Double getPaymentAmount() {
		return paymentAmount;
	}

	public void setPaymentAmount(Double paymentAmount) {
		this.paymentAmount = paymentAmount;
	}

	public String getAccessory() {
		return accessory;
	}

	public void setAccessory(String accessory) {
		this.accessory = accessory;
	}

	public String getPurchaseUser() {
		return purchaseUser;
	}

	public void setPurchaseUser(String purchaseUser) {
		this.purchaseUser = purchaseUser;
	}

	public String getCreateUser() {
		return createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	public String getCreateDept() {
		return createDept;
	}

	public void setCreateDept(String createDept) {
		this.createDept = createDept;
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

	public Date getModifyDate() {
		return modifyDate;
	}

	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	@Override
	public String toString() {
		return "PurchaseContract [purchaseContractId=" + purchaseContractId
				+ ", contractName=" + contractName + ", providerName="
				+ providerName + ", providerAddress=" + providerAddress
				+ ", materialName=" + materialName + ", price=" + price
				+ ", amount=" + amount + ", contractTotalPrice="
				+ contractTotalPrice + ", getTicketAmount=" + getTicketAmount
				+ ", paymentAmount=" + paymentAmount + ", accessory="
				+ accessory + ", purchaseUser=" + purchaseUser
				+ ", createUser=" + createUser + ", createDept=" + createDept
				+ ", createDate=" + createDate + ", modifyUser=" + modifyUser
				+ ", modifyDate=" + modifyDate + ", remark=" + remark + "]";
	}
}
