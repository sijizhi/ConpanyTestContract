package com.tongfu.contract.entity;
/**
 * 部门的实体
 * @author Administrator
 *
 */
public class Dept {
	
	private Integer deptId;//部门的id
	
	private String deptName;//部门名称
	
	public Dept() {
		// TODO Auto-generated constructor stub
	}

	public Dept(Integer deptId, String deptName) {
		super();
		this.deptId = deptId;
		this.deptName = deptName;
	}

	public Integer getDeptId() {
		return deptId;
	}

	public void setDeptId(Integer deptId) {
		this.deptId = deptId;
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	@Override
	public String toString() {
		return "Dept [deptId=" + deptId + ", deptName=" + deptName + "]";
	}
}
