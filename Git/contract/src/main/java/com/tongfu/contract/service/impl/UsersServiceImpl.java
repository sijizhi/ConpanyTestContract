package com.tongfu.contract.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.tongfu.contract.entity.Users;
import com.tongfu.contract.service.UsersService;

@Service("userService")
public class UsersServiceImpl implements UsersService {
	String sql="";
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public List<Users> getUsers() throws Exception {
		RowMapper<Users> rowMapper=new BeanPropertyRowMapper<Users>(Users.class);
		sql="select userId,userName,userCode,userPassword,"
				+ "gender,Contract_users.deptId deptId,Contract_users.roleId roleId,"
				+ "headPortrait,deptName s_deptName,roleName s_roleName "
				+ "from Contract_users,Contract_rolers,Contract_department "
				+ "where Contract_rolers.roleId=Contract_users.roleId and "
				+ "Contract_department.deptId=Contract_users.deptId  order by userId desc";
		List<Users>users=jdbcTemplate.query(sql,rowMapper );
		//System.out.println("------------用户信息"+users.toString());
		
		return users;
	}

	@Override
	public Users queryById(Users users) throws Exception {
		RowMapper<Users> rowMapper=new BeanPropertyRowMapper<Users>(Users.class);
		sql="select userId,userName,userCode,userPassword,"
				+ "gender,Contract_users.deptId deptId,Contract_users.roleId roleId,"
				+ "headPortrait,deptName s_deptName,roleName s_roleName "
				+ "from Contract_users,Contract_rolers,Contract_department "
				+ "where Contract_rolers.roleId=Contract_users.roleId and "
				+ "Contract_department.deptId=Contract_users.deptId and userId=?";
		users=jdbcTemplate.queryForObject(sql,rowMapper,users.getUserId());
		System.out.println("------------用户信息"+users.toString());
		
		return users;
	}

	@Override
	public int insertUsers(Users users) throws Exception {
		sql=" insert into Contract_users values(userId.Nextval,?,?,?,?,?,?,null)";
		int bl=jdbcTemplate.update(sql,users.getUserName(),users.getUserCode(),
				users.getUserPassword(),users.getGender(),users.getDeptId(),users.getRoleId() );
		return bl;
	}

	@Override
	public int updateUsers(Users users) throws Exception {
		sql=" update Contract_users set userName=?,userCode=?,gender=?,deptId=?,roleId=? where userId=?";
		int bl=jdbcTemplate.update(sql,users.getUserName(),users.getUserCode(),users.getGender(),users.getDeptId(),
				users.getRoleId(),users.getUserId() );
		return bl;
	}

	@Override
	public int deleteUsersById(Users users) throws Exception {
		sql="delete from Contract_users where userId=?";
		int bl=jdbcTemplate.update(sql,users.getUserId() );
		return bl;
	}

}
