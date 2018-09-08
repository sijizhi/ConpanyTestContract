package com.tongfu.contract.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.tongfu.contract.entity.Dept;
import com.tongfu.contract.entity.PurchaseContract;
import com.tongfu.contract.service.PurchaseContractService;


@Service("purchasecontractService")
public class PurchaseContractServiceImpl implements PurchaseContractService {

	String sql="";
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public List<PurchaseContract> getPcontract() throws Exception {
		
		RowMapper<PurchaseContract> rowMapper=new BeanPropertyRowMapper<PurchaseContract>(PurchaseContract.class);
		
		sql="select * from Contract_buy order by purchaseContractId desc";
		
		List<PurchaseContract> pcontract=jdbcTemplate.query(sql,rowMapper);
		
		return pcontract;
	}

	@Override
	public int insertPurchaseContract(PurchaseContract pcontract){
		
		sql="insert into Contract_buy values(purchaseContractId.Nextval,?,?,?,?,?,?,?,?,?,null,?,?,?,'采购部',?,null,null,?)";
		
		int bl=jdbcTemplate.update(sql,pcontract.getProviderName(),pcontract.getProviderAddress(),
				pcontract.getContractName(),pcontract.getMaterialName(),pcontract.getPrice(),
				pcontract.getAmount(),pcontract.getContractTotalPrice(),pcontract.getGetTicketAmount(),
				pcontract.getPaymentAmount(),pcontract.getRemark(),pcontract.getPurchaseUser(),pcontract.getCreateUser(),
				pcontract.getCreateDate(),pcontract.getProviderId()
				);
		
		System.out.println("*************插入成功"+bl);
	
		return bl;
	}

	@Override
	public PurchaseContract getPcontractById(PurchaseContract pcontract)
			throws Exception {
		RowMapper<PurchaseContract> rowMapper=new BeanPropertyRowMapper<PurchaseContract>(PurchaseContract.class);
		
		sql="select * from Contract_buy where purchaseContractId=?";
		
		pcontract=jdbcTemplate.queryForObject(sql,rowMapper,pcontract.getPurchaseContractId());
		
		return pcontract;
	}

	@Override
	public int deleteById(PurchaseContract pcontract) throws Exception {
		sql="delete from Contract_buy where purchaseContractId=?";
		
		int bl=jdbcTemplate.update(sql,pcontract.getPurchaseContractId());
		
		return bl;
	}

	@Override
	public int updateById(PurchaseContract pcontract) throws Exception {
		int bl=0;
		sql="update Contract_buy set modifyUser=?,modifyDate=?,providerId=?,providerName=?,providerAddress=?,materialName=?,price=?,amount=?,contractName=?,purchaseUser=?,paymentAmount=?,remark=?,contractTotalPrice=?,getTicketAmount=?  where purchaseContractId=?";
		
		bl=jdbcTemplate.update(sql,pcontract.getModifyUser(),pcontract.getModifyDate(),pcontract.getProviderId(),
				pcontract.getProviderName(),pcontract.getProviderAddress(),pcontract.getMaterialName(),
				pcontract.getPrice(),pcontract.getAmount(),pcontract.getContractName(),pcontract.getPurchaseUser(),
				pcontract.getPaymentAmount(),pcontract.getRemark(),pcontract.getContractTotalPrice(),
				pcontract.getGetTicketAmount(),pcontract.getPurchaseContractId()
				);
		
		System.out.println("*************更新成功"+bl);
	
		return bl;
	}

}
