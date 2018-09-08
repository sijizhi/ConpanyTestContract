package com.tongfu.contract.service.impl;

import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.tongfu.contract.entity.Users;
import com.tongfu.contract.service.LoginService;

import ch.qos.logback.classic.util.LoggerNameUtil;

/**
 * 登录业务层
 * @author sijiezhi
 *
 */

@Service("loginService")
public class LoginServiceImpl implements LoginService {

	String sql ="";
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	/**
	 * 登录(植思杰操作)
	 */
	@Override
	public Users getOne(Users user) throws Exception {
		System.out.println("========LoginService层========"+user.getUserCode());
		sql="select userId,userName,userCode,userPassword,gender,Contract_users.deptId deptId,"
				+ "Contract_users.roleId roleId,headPortrait,deptName s_deptName,roleName s_roleName"
				+ " from Contract_users left join Contract_rolers on Contract_rolers.Roleid=Contract_users.Roleid"
				+ " left join Contract_department on Contract_department.Deptid=Contract_users.Deptid "
				+ "where userCode=?";
		String password=user.getUserPassword();//密码
		RowMapper<Users> rowMapper=new BeanPropertyRowMapper<Users>(Users.class);
		user=jdbcTemplate.queryForObject(sql,rowMapper,user.getUserCode());
		System.out.println("=======业务层========="+user);
		if(user!=null){
			if(!user.getUserPassword().equals(password)){
				user=new Users();
			}
		}
		return user;
	}
	
	
	/**
	 * 登录状态记录
	 */
	@Override
	public boolean updateLoginType(Users user) throws Exception {
		boolean bl=false;
		try {
			sql="update Contract_users set "
					+ " loginType=? where userId=?";
			
			jdbcTemplate.update(sql, user.getLoginType(), user.getUserId());
			bl=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return bl;
	}


	/**
	 * 获取登录状态的用户
	 */
	@Override
	public Users getLoginOne(Users user) throws Exception {
		
		 try {
			sql="select userId,userName,userCode,userPassword,gender,Contract_users.deptId deptId,"
					+ "Contract_users.roleId roleId,headPortrait,deptName s_deptName,roleName s_roleName"
					+ " from Contract_users left join Contract_rolers on Contract_rolers.Roleid=Contract_users.Roleid"
					+ " left join Contract_department on Contract_department.Deptid=Contract_users.Deptid "
					+ "where loginType=?";
					//"select * from  Contract_users where loginType=?";
			System.out.println("走之前======="+user.getLoginType());
			RowMapper<Users> rowMapper=new BeanPropertyRowMapper<Users>(Users.class);
			user=jdbcTemplate.queryForObject(sql,rowMapper,user.getLoginType());
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
		return user;
	}

}
