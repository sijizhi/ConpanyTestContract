package com.tongfu.contract.controller;

import java.util.HashMap;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.websocket.server.PathParam;

import org.springframework.http.HttpRequest;
import org.springframework.util.SocketUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.support.HttpRequestHandlerServlet;

import com.tongfu.contract.entity.Users;
import com.tongfu.contract.service.LoginService;

/**
 * 登录控制层
 * @author sijiezhi
 *
 */
@RestController
public class LoginController {
	@Resource
	private LoginService loginService;//登录业务
	private Users Login_User;

	/*
	 * 登录
	 */
	@RequestMapping("/doLogin")
	public  Object doLogin(String userCode,
			@RequestParam(value="userPassword",required=false)String userPassword,HttpServletRequest request){
		System.out.println("==============dologin=============");
		HashMap<String,String> map=new HashMap<>();
		HttpSession session=request.getSession();
		Login_User=new Users();
		Login_User.setUserCode(userCode);
		Login_User.setUserPassword(userPassword);
		try {
			
			Login_User=loginService.getOne(Login_User);//查询单个用户
			if(Login_User.getUserName()!=null&&Login_User.getUserName().length()!=0){
				String uuid=UUID.randomUUID().toString();
				System.out.println("键值是===uuid=======   "+uuid);
				String id=Login_User.getUserId().toString();
				uuid=id+uuid;
				Login_User.setLoginType(uuid);//记录登录状态
//				System.out.println("键值是===uuid=======   "+uuid);
//				System.out.println("键值是===Login_User=======   "+Login_User);				
//				session.setAttribute(uuid, Login_User);//保存会话到服务器
//				Users user=(Users)session.getAttribute(uuid);
//				System.out.println("=========session==============="+user);
				
				if(loginService.updateLoginType(Login_User)){
					map.put("result",uuid);//返回一个登录状态到前端
				}else{
					map.put("result", "false");
				}
				
			}else{
				map.put("result", "false");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;//返回一个登录判断
	}
	
	/**
	 * 登录人姓名
	 * @return
	 */
	@RequestMapping("/Login_UserName")
	public String doLogin(){
		return Login_User.getUserName();
	}
	/**
	 * 获取登录用户信息(植思杰)
	 * @return
	 */
	@RequestMapping("/getSijieUser")
	public Object getSijieUser(){
		HashMap<String, Users> map=new HashMap<>();
		map.put("user", Login_User);
		return map;
	}
	
	@RequestMapping("/getSession/{pard}")
	public Object getSession(HttpServletRequest request,@PathVariable("pard") String param){
		HttpSession session=request.getSession();
		System.out.println(param);
		System.out.println(session.getAttribute(param));
		Users user=(Users)session.getAttribute(param);
		System.out.println(user);
		HashMap<String, Users> map=new HashMap<>();
		map.put("user", user);
		return map;
	}
	
	@RequestMapping("/getLoginUser/{pard}")
	@ResponseBody
	public Object getLoginUser(@PathVariable("pard") String param){
		System.out.println("==param gelogin=="+param);
		Users user=new Users();
		user.setLoginType(param);
		System.out.println();
		try {
			user=loginService.getLoginOne(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("========getLoginUser========="+user);
		HashMap<String, Users> map=new HashMap<>();
		map.put("user", user);
		return map;
	}
	
	
}
