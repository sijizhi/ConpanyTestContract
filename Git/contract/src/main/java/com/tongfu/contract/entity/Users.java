package com.tongfu.contract.entity;

import java.io.Serializable;

/**
 * 用户实体类
 * @author 
 *
 */
public class Users implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * 数据库字段
	 */
	private Integer userId;//用户id
	private String userName;//用户名
	private String userCode;//用户账号
	private String userPassword;//用户密码
	private Integer gender;//性别
	private Integer deptId;//部门编号
	private Integer roleId;//角色
	private String headPortrait;//头像地址
	private String loginType;//登录状态
	public String getLoginType() {
		return loginType;
	}

	public void setLoginType(String loginType) {
		this.loginType = loginType;
	}

	/**
	 * 额外属性，用于存放其他信息
	 */
	private String s_deptName;//用户名称
	private String s_roleName;//角色名称
	private String s_sex;//性别显示
	
	public Users() {
		
	}

	public Users(Integer userId, String userName, String userCode, String userPassword, Integer gender, Integer deptId,
			Integer roleId, String headPortrait) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userCode = userCode;
		this.userPassword = userPassword;
		this.gender = gender;
		this.deptId = deptId;
		this.roleId = roleId;
		this.headPortrait = headPortrait;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserCode() {
		return userCode;
	}

	public void setUserCode(String userCode) {
		this.userCode = userCode;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public Integer getGender() {
		return gender;
	}

	public void setGender(Integer gender) {
		this.gender = gender;
	}

	public Integer getDeptId() {
		return deptId;
	}

	public void setDeptId(Integer deptId) {
		this.deptId = deptId;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public String getHeadPortrait() {
		return headPortrait;
	}

	public void setHeadPortrait(String headPortrait) {
		this.headPortrait = headPortrait;
	}

	public String getS_deptName() {
		return s_deptName;
	}

	public void setS_deptName(String s_deptName) {
		this.s_deptName = s_deptName;
	}

	public String getS_roleName() {
		return s_roleName;
	}

	public void setS_roleName(String s_roleName) {
		this.s_roleName = s_roleName;
	}

	public String getS_sex() {
		if(this.gender==1){
			s_sex="男";
		}else{
			s_sex="女";
		}
		return s_sex;
	}

	public void setS_sex(String s_sex) {
		this.s_sex = s_sex;
	}

	@Override
	public String toString() {
		return "Users [userId=" + userId + ", userName=" + userName + ", userCode=" + userCode + ", loginType="
				+ loginType + "]";
	}

	
	


	
	
	
}
