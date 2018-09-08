package com.tongfu.contract.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.tongfu.contract.entity.Contract_Provider;
import com.tongfu.contract.service.Contract_ProviderService;
/**
 * 供应商业务层
 * @author Administrator
 *
 */
@Service("contract_ProviderService")
public class Contract_ProviderServiceImpl implements Contract_ProviderService {
	String sql ="";
	@Autowired
	private JdbcTemplate jdbcTemplate;
	private Contract_Provider provider;
	/**
	 * 遍历所有供应商信息
	 */
	@Override
	public List<Contract_Provider> allProvider() throws Exception {
		List<Contract_Provider> list = null;
		sql = "select * from Contract_Provider order by providerId desc";
		RowMapper<Contract_Provider> rowMapper=new BeanPropertyRowMapper<Contract_Provider>(Contract_Provider.class);
		list=jdbcTemplate.query(sql, rowMapper);//查询
		return list;//返回客户信息集合
	}
	/**
	 * 根据供应商ID删除信息
	 */
	@Override
	public boolean delProvider(Contract_Provider provider) throws Exception{
		//初始化
		boolean bl = false;
		//sql语句
		sql = "delete from Contract_Provider where providerId = ?";
		//执行删除
		jdbcTemplate.update(sql,provider.getProviderId());
		//删除不报错给bl赋值true
		bl = true;
		//返回结果bl
		return bl;
	}
	/**
	 * 添加供应商信息
	 */
	@Override
	public boolean addProvider(Contract_Provider provider) throws Exception{
		//初始化
		boolean bl = false;
		//sql语句
		sql = "insert into Contract_Provider values(CUSTOMERID.NEXTVAL,?,?,?,'www.tongfu.com',?,?,?,?,?,to_date(to_char(sysdate,'YYYY-MM-DD HH24:MI:SS'),'YYYY-MM-DD HH24:MI:SS'),null,null,null)";
		//执行添加
		jdbcTemplate.update(sql,provider.getCompanyName(),provider.getCompanyAddres(),provider.getEmail(),provider.getLinkMan(),provider.getLinkManPhone(),provider.getRemarks(),provider.getCreateUser(),provider.getCreateDeptName());
		//添加不报错给bl赋值true
		bl = true;
		//返回结果bl
		return bl;
	}
	/**
	 * 返回单个供应商信息
	 */
	@Override
	public Contract_Provider getOne(Contract_Provider provider) throws Exception{
	//sql语句
	sql="select * from Contract_Provider where providerId = ?";
	RowMapper<Contract_Provider> rowMapper=new BeanPropertyRowMapper<Contract_Provider>(Contract_Provider.class);
	provider=jdbcTemplate.queryForObject(sql,rowMapper,provider.getProviderId());
	return provider;
	}
	/**
	 * 修改供应商信息
	 */
	@Override
	public boolean modifyProvider(Contract_Provider provider) throws Exception{
		//初始化
		boolean bl = false;
		//sql语句
		sql = "update Contract_Provider set companyName = ?,companyAddres = ?,email = ?,linkMan = ?,linkManPhone = ?,remarks = ?,modifyUser = ?,modifyDeptName = ?,modifyDate = sysdate where providerId = ?";
		//执行添加
		jdbcTemplate.update(sql,provider.getCompanyName(),provider.getCompanyAddres(),provider.getEmail(),provider.getLinkMan(),provider.getLinkManPhone(),provider.getRemarks(),provider.getModifyUser(),provider.getModifyDeptName(),provider.getProviderId());
		//添加不报错给bl赋值true
		bl = true;
		//返回结果bl
		return bl;
	}

}
