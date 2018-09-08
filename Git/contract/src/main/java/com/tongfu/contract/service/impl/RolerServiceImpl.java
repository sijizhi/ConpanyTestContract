package com.tongfu.contract.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.tongfu.contract.entity.Rolers;
import com.tongfu.contract.entity.Users;
import com.tongfu.contract.service.RolerService;


@Service("rolerService")
public class RolerServiceImpl implements RolerService {
	String sql="";
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public List<Rolers> getRolers() throws Exception {
		RowMapper<Rolers> rowMapper=new BeanPropertyRowMapper<Rolers>(Rolers.class);
		sql="select * from Contract_rolers";
		List<Rolers>rolers=jdbcTemplate.query(sql, rowMapper);
		return rolers;
	}

}
