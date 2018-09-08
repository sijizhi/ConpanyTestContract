package com.tongfu.contract.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.tongfu.contract.entity.Salescontract;
import com.tongfu.contract.service.SalescontractService;

/**
 * 业务层
 * @author Sijie Zhi
 *
 */
@Service("/salescontractService")
public class SalescontractServiceImpl implements SalescontractService {
	
	String sql ="";
	@Autowired
	private JdbcTemplate jdbcTemplate;

	/**
	 * 所有销售合同
	 */
	@Override
	public List<Salescontract> saleList() throws Exception {
		sql="select * from Contract_salescontract order by salesContractId desc";
		RowMapper<Salescontract> rowMapper=
				new BeanPropertyRowMapper<>(Salescontract.class);
		List<Salescontract> list=jdbcTemplate.query(sql, rowMapper);
		return list;
	}

	/**
	 * 删除合同
	 */
	@Override
	public boolean deleteSale(Salescontract sale) throws Exception {
		boolean bl=false;
		try {
			sql="delete from Contract_salescontract where salesContractId=?";
			jdbcTemplate.update(sql, sale.getSalesContractId());//执行删除
			bl=true;
		} catch (Exception e) {
			// TODO: handle exception
		}
		return bl;
	}

	/**
	 * 添加合同
	 */
	@Override
	public boolean addSale(Salescontract sale) throws Exception {
		boolean bl=false;
		try {
			sql="insert into Contract_salescontract(salesContractId,"
					+ "contractName,customerName,productName,"
					+ "salePrice,amount,contractAmount,invoiceAmount,"
					+ "getMoneyAmount,accessory,remark,saleUser,createUser,"
					+ "createDeptName,createDate,modifyUser,modifyDeptName,"
					+ "modifyDate,salesApprovalId) "
					+ "values(salesContractId.Nextval,?,?,?,?,?,?,?,?,?,?,?,?,?,?,null,null,null,?)";
			jdbcTemplate.update(sql,sale.getContractName(),sale.getCustomerName(),sale.getProductName(),
					sale.getSalePrice(),sale.getAmount(),sale.getContractAmount(),
					sale.getInvoiceAmount(),sale.getGetMoneyAmount(),sale.getAccessory(),
					sale.getRemark(),sale.getSaleUser(),sale.getCreateUser(),sale.getCreateDeptName(),
					sale.getCreateDate(),sale.getSalesApprovalId());//执行添加
			bl=true;
		} catch (Exception e) {
			// TODO: handle exception
		}
		return bl;
	}

	/**
	 * 更新合同
	 */
	@Override
	public boolean modifySale(Salescontract sale) throws Exception {
		boolean bl=false;
		try {
			sql="update Contract_salescontract set "
					+ "contractName=?,customerName=?,productName=?,salePrice=?,amount=?,"
					+ "contractAmount=?,invoiceAmount=?,getMoneyAmount=?,accessory=?,remark=?,"
					+ "saleUser=?,modifyUser=?,modifyDeptName=?,modifyDate=? "
					+ "where salesContractId=?";
			jdbcTemplate.update(sql,sale.getContractName(),sale.getCustomerName(),sale.getProductName(),
					sale.getSalePrice(),sale.getAmount(),sale.getContractAmount(),
					sale.getInvoiceAmount(),sale.getGetMoneyAmount(),sale.getAccessory(),
					sale.getRemark(),sale.getSaleUser(),sale.getModifyUser(),sale.getModifyDeptName(),
					sale.getModifyDate(),sale.getSalesContractId());//执行修改
			bl=true;
		} catch (Exception e) {
			// TODO: handle exception
		}
		return bl;
	}

	
	/**
	 * 单个合同
	 */
	@Override
	public Salescontract getSale(Salescontract sale) throws Exception {
		sql="select * from Contract_salescontract where salesContractId=?";
		RowMapper<Salescontract> rowMapper=
				new BeanPropertyRowMapper<>(Salescontract.class);
		sale=jdbcTemplate.queryForObject(sql, rowMapper,sale.getSalesContractId());
		return sale;
	}

	
	
}
