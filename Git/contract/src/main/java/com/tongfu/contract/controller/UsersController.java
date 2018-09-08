package com.tongfu.contract.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tongfu.contract.entity.Dept;
import com.tongfu.contract.entity.Rolers;
import com.tongfu.contract.entity.Users;
import com.tongfu.contract.service.DeptService;
import com.tongfu.contract.service.RolerService;
import com.tongfu.contract.service.UsersService;

@RestController
@RequestMapping("/users")
public class UsersController {
	@Resource
	private UsersService userService;
	@Resource
	private DeptService deptService;
	@Resource
	private RolerService rolerService;
	private List<Users> users;
	private List<Dept> depts;
	private List<Rolers> rolers;
	private Users user;
	
	@RequestMapping("/getUsers")
	public List<Users> getUsers(){
		
		try {
			users=userService.getUsers();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return users;
	}
	
	@RequestMapping("/queryuserById")
	public Users queryById(String indexValue){
		user=new Users();
		user.setUserId(Integer.valueOf(indexValue));
		System.out.println("**********"+indexValue);
		try {
			user=userService.queryById(user);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return user;
	}
	
	@RequestMapping("/insertUsers")
	public String insertUsers(String userName,String userCode,String userPassword,
			String gender,String rolerId,String deptId){
		
		String str="";
		int cl=0;
		user=new Users();
		
		user.setUserName(userName);
		user.setUserCode(userCode);
		user.setUserPassword(userPassword);
		user.setGender(Integer.valueOf(gender));
		user.setRoleId(Integer.valueOf(rolerId));
		user.setDeptId(Integer.valueOf(deptId));
		
		
		try {
			users=userService.getUsers();
			
			for(Users li:users){
				if(li.getUserCode().equals(userCode)){
					cl=0;
					break;
				}else{
					cl=1;
				}
			}
			System.out.println("--账号--"+cl);
			
			if(cl==1){
				int bl=userService.insertUsers(user);
				if(bl==1){
					str="true";
				}else{
					str="false";
				}
			}else{
				str="false";
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return str;
	}
	
	@RequestMapping("/modifyUsers")
	public String modifyUsers(String indexValue,String userName,String userCode,
			String gender,String rolerId,String deptId) throws Exception{
		
		depts=deptService.getDept();
		rolers=rolerService.getRolers();
		users=userService.getUsers();
		
		String str="";
		String gender1="";
		String rolerId1="";
		String deptId1="";
		System.out.println("indexValue"+indexValue+"userName"+userName+"userCode"+userCode+"gender"+gender+"rolerId"+rolerId+"deptId"+deptId);
		if(gender.equals("男")){
			gender1="1";
		}else if(gender.equals("女")){
			gender1="0";
		}else{
			gender1=gender;
		}
		for(Rolers li:rolers){
			//判断角色类型
			if(rolerId.equals(li.getRoleName())){
				rolerId1=String.valueOf(li.getRoleId());
				System.out.println("--2--"+rolerId1);
				break;
			}else{
				rolerId1=rolerId;
			}	
		}
		for(Dept li:depts){
			//判断部门类型
			if(deptId.equals(li.getDeptName())){
				deptId1=String.valueOf(li.getDeptId());
				System.out.println("--4--"+deptId1);
				break;
			}else{
				deptId1=deptId;
			}
		}
		
		user=new Users();
		
		user.setUserId(Integer.valueOf(indexValue));
		user.setUserName(userName);
		user.setUserCode(userCode);
		user.setGender(Integer.valueOf(gender1));
		user.setRoleId(Integer.valueOf(rolerId1));
		user.setDeptId(Integer.valueOf(deptId1));
		System.out.println("+++++++++++"+user);
		try {
			int bl=userService.updateUsers(user);
			if(bl==1){
				str="true";
			}else{
				str="false";
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return str;
	}
	
	@RequestMapping("/deleteUsers")
	public String deleteUsers(String indexValue){
		String str="";
		user=new Users();
		
		user.setUserId(Integer.valueOf(indexValue));
		
		try {
			int bl=userService.deleteUsersById(user);
			
			if(bl==1){
				str="true";
			}else{
				str="false";
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		return str;
	}
}
