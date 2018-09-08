package com.tongfu.contract.service.impl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;



import com.tongfu.contract.entity.Dept;
import com.tongfu.contract.service.DeptService;


@Service("deptService")
public class DeptServiceImpl implements DeptService {
	String sql="";
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<Dept> getDept() throws Exception {
		
		RowMapper<Dept> rowMapper=new BeanPropertyRowMapper<Dept>(Dept.class);
		
		sql="select * from Contract_Department order by deptId desc";
		
		List<Dept> dept=jdbcTemplate.query(sql,rowMapper);
		
		return dept;
	}

	@Override
	public Dept queryById(Dept dept) throws Exception {
		
		RowMapper<Dept> rowMapper=new BeanPropertyRowMapper<Dept>(Dept.class);
		
		sql="select * from Contract_Department where deptId=?";
		
		dept=jdbcTemplate.queryForObject(sql,rowMapper,dept.getDeptId());
		
		return dept;
	}

	@Override
	public int deleteById(Dept dept) throws Exception {
		
		sql="delete from Contract_department where deptId=? ";
		
		int bl=jdbcTemplate.update(sql,dept.getDeptId());
		
		return bl;
	}

	@Override
	public int update_dept(Dept dept) throws Exception {
		
		sql="update Contract_Department set deptName=? where deptId= ? ";
		
		int bl=jdbcTemplate.update(sql,dept.getDeptName(),dept.getDeptId());
		
		System.out.println("*************更新成功"+bl);
		
		return bl;
	}

	@Override
	public int add_dept(Dept dept) throws Exception {
		
		sql="insert into Contract_Department values(deptId.Nextval,?)";
		
		int bl=jdbcTemplate.update(sql,dept.getDeptName());
		
		System.out.println("*************更新成功"+bl);
		
		return bl;
	}
}
