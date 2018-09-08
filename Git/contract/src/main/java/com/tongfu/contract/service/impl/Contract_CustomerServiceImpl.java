package com.tongfu.contract.service.impl;

import java.util.List;









import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.tongfu.contract.entity.Contract_Customer;
import com.tongfu.contract.entity.Product;
import com.tongfu.contract.entity.Users;
import com.tongfu.contract.service.Contract_CustomerService;
/**
 * 客户管理业务层
 * @author Administrator
 *
 */
@Service("contrace_CustomerService")
public class Contract_CustomerServiceImpl implements Contract_CustomerService {
	String sql ="";
	@Autowired
	private JdbcTemplate jdbcTemplate;
	private Contract_Customer customer;
	/**
	 * 遍历所有客户信息
	 */
	@Override
	public List<Contract_Customer> allCustomer() {
		List<Contract_Customer> list = null;
		sql = "select * from Contract_Customer order by customerId desc";
		RowMapper<Contract_Customer> rowMapper=new BeanPropertyRowMapper<Contract_Customer>(Contract_Customer.class);
		list=jdbcTemplate.query(sql, rowMapper);//查询
		return list;//返回客户信息集合
	}
	/**
	 * 根据客户ID删除客户信息
	 */
	@Override
	public boolean delCustomer(Contract_Customer customer) {
		//初始化
		boolean bl = false;
		//sql语句
		sql = "delete from contract_customer where customerId = ?";
		//执行删除
		jdbcTemplate.update(sql,customer.getCustomerId());
		//删除不报错给bl赋值true
		bl = true;
		//返回结果bl
		return bl;
	}
	/**
	 * 添加客户信息
	 */
	@Override
	public boolean addCustomer(Contract_Customer customer) throws Exception {
		//初始化
		boolean bl = false;
		//sql语句
		sql = "insert into contract_customer values(CUSTOMERID.NEXTVAL,?,?,?,'www.tongfu.com',?,?,?,?,?,to_date(to_char(sysdate,'YYYY-MM-DD HH24:MI:SS'),'YYYY-MM-DD HH24:MI:SS'),null,null,null)";
		//执行添加
		jdbcTemplate.update(sql,customer.getCompanyName(),customer.getCompanyAddres(),customer.getEmail(),customer.getLinkMan(),customer.getLinkManPhone(),customer.getRemarks(),customer.getCreateUser(),customer.getCreateDeptName());
		//添加不报错给bl赋值true
		bl = true;
		//返回结果bl
		return bl;
	}
	/**
	 * 返回单个客户修改信息
	 */
	@Override
	public Contract_Customer getOne(Contract_Customer customer) throws Exception {
		//sql语句
		sql="select * from contract_customer where customerId = ?";
		RowMapper<Contract_Customer> rowMapper=new BeanPropertyRowMapper<Contract_Customer>(Contract_Customer.class);
		customer=jdbcTemplate.queryForObject(sql,rowMapper,customer.getCustomerId());
		return customer;
	}
	/**
	 * 修改客户信息
	 */
	@Override
	public boolean modifyCustomer(Contract_Customer customer) throws Exception {
		//初始化
		boolean bl = false;
		//sql语句
		sql = "update contract_customer set companyName = ?,companyAddres = ?,email = ?,linkMan = ?,linkManPhone = ?,remarks = ?,modifyUser = ?,modifyDeptName = ?,modifyDate = sysdate where customerId = ?";
		//执行添加
		jdbcTemplate.update(sql,customer.getCompanyName(),customer.getCompanyAddres(),customer.getEmail(),customer.getLinkMan(),customer.getLinkManPhone(),customer.getRemarks(),customer.getModifyUser(),customer.getModifyDeptName(),customer.getCustomerId());
		//添加不报错给bl赋值true
		bl = true;
		//返回结果bl
		return bl;
	}


}
