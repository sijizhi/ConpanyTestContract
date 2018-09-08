package com.tongfu.contract.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 供应商信息实体
 * @author Administrator
 *
 */
public class Contract_Provider {
	private Integer providerId;//供应商ID
	private String companyName;//供应商公司名称
	private String companyAddres;//供应商公司地址
	private String email;//供应商公司邮箱
	private String webSite;//供应商公司网址
	private String linkMan;//联系人
	private String linkManPhone;//联系人电话
	private String remarks;//备注
	private String createUser;//创建人
	private String createDeptName;//创建人部门
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date createDate;//创建时间
	private String modifyUser;//修改人
	private String modifyDeptName;//修改人部门
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date modifyDate;//修改时间
	
	public Contract_Provider() {
		// TODO Auto-generated constructor stub
	}

	public Contract_Provider(Integer providerId, String companyName,
			String companyAddres, String email, String webSite, String linkMan,
			String linkManPhone, String remarks, String createUser,
			String createDeptName, Date createDate, String modifyUser,
			String modifyDeptName, Date modifyDate) {
		super();
		this.providerId = providerId;
		this.companyName = companyName;
		this.companyAddres = companyAddres;
		this.email = email;
		this.webSite = webSite;
		this.linkMan = linkMan;
		this.linkManPhone = linkManPhone;
		this.remarks = remarks;
		this.createUser = createUser;
		this.createDeptName = createDeptName;
		this.createDate = createDate;
		this.modifyUser = modifyUser;
		this.modifyDeptName = modifyDeptName;
		this.modifyDate = modifyDate;
	}

	public Integer getProviderId() {
		return providerId;
	}

	public void setProviderId(Integer providerId) {
		this.providerId = providerId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCompanyAddres() {
		return companyAddres;
	}

	public void setCompanyAddres(String companyAddres) {
		this.companyAddres = companyAddres;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getWebSite() {
		return webSite;
	}

	public void setWebSite(String webSite) {
		this.webSite = webSite;
	}

	public String getLinkMan() {
		return linkMan;
	}

	public void setLinkMan(String linkMan) {
		this.linkMan = linkMan;
	}

	public String getLinkManPhone() {
		return linkManPhone;
	}

	public void setLinkManPhone(String linkManPhone) {
		this.linkManPhone = linkManPhone;
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
