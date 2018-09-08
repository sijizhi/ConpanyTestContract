package com.tongfu.contract.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.tongfu.contract.entity.Upload;
import com.tongfu.contract.service.UploadService;

@Service("uploadService")
public class UploadServiceImpl implements UploadService {

	String sql="";
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public int insertUpload(Upload upload) throws Exception {
		sql="insert into upload values(upid.nextval,?)";
		
		int bl=jdbcTemplate.update(sql,upload.getUrl());
		
		System.out.println("*************插入成功"+bl);
	
		return bl;
	}
}
