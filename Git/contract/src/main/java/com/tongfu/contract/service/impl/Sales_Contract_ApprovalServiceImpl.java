package com.tongfu.contract.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.tongfu.contract.entity.Contract_Provider;
import com.tongfu.contract.entity.Sales_Contract_Approval;
import com.tongfu.contract.service.Sales_Contract_ApprovalService;
@Service("sales_Contract_ApprovalService")
public class Sales_Contract_ApprovalServiceImpl implements Sales_Contract_ApprovalService {
	String sql ="";
	@Autowired
	private JdbcTemplate jdbcTemplate;
	private Sales_Contract_Approval approval;
	/**
	 * 遍历所有销售合同审批
	 */
	@Override
	public List<Sales_Contract_Approval> allApproval() throws Exception {
		List<Sales_Contract_Approval> list = null;
		sql = "select * from sales_Contract_Approval order by salesApprovalId desc";
		RowMapper<Sales_Contract_Approval> rowMapper=new BeanPropertyRowMapper<Sales_Contract_Approval>(Sales_Contract_Approval.class);
		list=jdbcTemplate.query(sql, rowMapper);//查询
		return list;
	}
	/**
	 * 添加销售合同审批
	 */
	@Override
	public boolean addApproval(Sales_Contract_Approval approval) throws Exception {
		//初始化
		boolean bl = false;
		//sql语句
		sql = "insert into sales_Contract_Approval values(salesApprovalId.Nextval,?,?,?,0,null,to_date(to_char(sysdate,'YYYY-MM-DD HH24:MI:SS'),'YYYY-MM-DD HH24:MI:SS'),?,?,?,?,?,?)";
		//sql="insert into sales_Contract_Approval values(salesApprovalId.Nextval,salePrice,amount,totalSales,0,null,to_date(to_char(sysdate,'YYYY-MM-DD HH24:MI:SS'),'YYYY-MM-DD HH24:MI:SS'),createUser,companyName,productName,cost,price,remarks)";
		jdbcTemplate.update(sql,approval.getSalePrice(),approval.getAmount(),approval.getTotalSales(),approval.getCreateUser(),approval.getCompanyName(),approval.getProductName(),approval.getCost(),approval.getPrice(),approval.getRemarks());
		//添加不报错给bl赋值true
		bl = true;
		//返回结果bl
		return bl;
	}
	/**
	 * 返回单个销售审批信息
	 */
	@Override
	public Sales_Contract_Approval getOne(Sales_Contract_Approval approval) throws Exception {
		//sql语句
		sql="select * from sales_Contract_Approval where salesApprovalId = ?";
		RowMapper<Sales_Contract_Approval> rowMapper=new BeanPropertyRowMapper<Sales_Contract_Approval>(Sales_Contract_Approval.class);
		approval=jdbcTemplate.queryForObject(sql,rowMapper,approval.getSalesApprovalId());
		return approval;
	}
	/**
	 * 修改销售合同审批状态
	 */
	@Override
	public boolean modifyApproval(Sales_Contract_Approval approval) throws Exception {
		//初始化
		boolean bl = false;
		//sql语句
		sql = "update sales_Contract_Approval set approvalStatus =? where salesApprovalId = ?";
		//执行添加
		jdbcTemplate.update(sql,approval.getApprovalStatus(),approval.getSalesApprovalId());
		//添加不报错给bl赋值true
		bl = true;
		//返回结果bl
		return bl;
	}
	/**
	 * 根据部门显示销售合同审批信息
	 */
	@Override
	public List<Sales_Contract_Approval> deptIdApproval(Sales_Contract_Approval approval) throws Exception {
		List<Sales_Contract_Approval> list = null;
		sql = "select * from sales_Contract_Approval  where approvalStatus = ? order by salesApprovalId desc";
		RowMapper<Sales_Contract_Approval> rowMapper=new BeanPropertyRowMapper<Sales_Contract_Approval>(Sales_Contract_Approval.class);
		list=jdbcTemplate.query(sql, rowMapper,approval.getApprovalStatus());//查询
		return list;
	}

}
