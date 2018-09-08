package com.tongfu.contract;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * springboot 驱动类
 * @author Sijie Zhi
 *
 */
@SpringBootApplication
//@ComponentScan(basePackages = {"com.tongfu.contract"})
public class Application {
	

	
	public static void main(String[] args) {
		//启动应用
		SpringApplication.run(Application.class, args);
	}
}
