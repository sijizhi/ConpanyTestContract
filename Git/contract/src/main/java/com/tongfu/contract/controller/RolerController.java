package com.tongfu.contract.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tongfu.contract.entity.Dept;
import com.tongfu.contract.entity.Rolers;
import com.tongfu.contract.service.DeptService;
import com.tongfu.contract.service.RolerService;

@RestController
@RequestMapping("/roler")
public class RolerController {
	
	@Resource
	private RolerService rolerService;
	private List<Rolers> rolers;
	private Rolers roler;
	
	@RequestMapping("/getRolers")
	public List<Rolers> getRolers(){
		
		try {
			rolers=rolerService.getRolers();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rolers;
	}

}
