package com.tongfu.contract.controller;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tongfu.contract.entity.Upload;
import com.tongfu.contract.service.PurchaseContractService;
import com.tongfu.contract.service.UploadService;


@RestController
@RequestMapping("/load")
public class UploadController {
	
	@Resource
	private UploadService uploadService;
	private Upload upload;
	
	@RequestMapping("/upload")
	public String upload(HttpServletRequest request,HttpServletResponse response,String filename) throws Exception{
		boolean bl=false;
		String str="";
		int cl=0;
		System.out.println("---进入上传文件"+filename);
		//PrintWriter out=response.getWriter();
		//获取真是路径
		String path=request.getRealPath("/");
		//路径拼接
		String filePath=path+"upload\\"+filename;
		System.out.println("**********1"+filePath);
		//前端
		String filePaths="d:\\images\\"+filename;
		System.out.println("**********2"+filePaths);
		//读取文件信息
		FileInputStream fis=new FileInputStream(filePaths);
		//将文件写入到服务器中
		FileOutputStream fos=new FileOutputStream(filePath);
		//声明存储的数组
		byte[]b=new byte[1024];
		
		int length=0;
		while((length=fis.read(b))!=-1){
			fos.write(b, 0, length);
		}
		bl=true;
		fis.close();
		fos.close();
		
		if(bl==true){
			System.out.println("**********"+bl);
			
			upload=new Upload();
			upload.setUrl(filePath);
			
			System.out.println("**********"+upload.getUrl());
			cl=uploadService.insertUpload(upload);
			
			if(cl==1){
				str="true";
			}else{
				str="false";
			}
		}else{
			str="false";
		}
		
		System.out.println("************文件路径********"+filePath);
		
		return str;
	}

}
