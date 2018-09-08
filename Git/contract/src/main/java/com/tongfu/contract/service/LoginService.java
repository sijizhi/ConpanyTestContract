package com.tongfu.contract.service;

import com.tongfu.contract.entity.Users;

/**
 * 登录抽象类
 * @author 
 *
 */
public interface LoginService {
	
	public Users getOne(Users user) throws Exception;//单个用户
	public boolean updateLoginType(Users user) throws Exception;//设置登录状态
	public Users getLoginOne(Users user) throws Exception;//单个用户
}
