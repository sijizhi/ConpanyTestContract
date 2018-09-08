package com.tongfu.contract.entity;

public class Rolers {
	
	private Integer roleId;//角色类型id
	
	private String roleName;//角色类型名称
	
	public Rolers() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Rolers [roleId=" + roleId + ", roleName=" + roleName + "]";
	}

	public Rolers(Integer roleId, String roleName) {
		super();
		this.roleId = roleId;
		this.roleName = roleName;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	
	

}
