package com.tongfu.contract.service;

import java.util.List;

import com.tongfu.contract.entity.Users;

public interface UsersService {
	
	//查询员工的所有信息
	public List<Users> getUsers() throws Exception;
	
	//根据人员id查询人员信息
	public Users queryById(Users users)throws Exception;
	
	//添加人员信息
	public int insertUsers(Users users)throws Exception;
	
	//修改用户信息
	public int updateUsers(Users users)throws Exception;
	
	//根据用户id删除信息
	public int deleteUsersById(Users users)throws Exception;

}
