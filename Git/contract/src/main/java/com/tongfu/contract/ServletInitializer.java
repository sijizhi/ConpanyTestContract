package com.tongfu.contract;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

public class ServletInitializer extends SpringBootServletInitializer{
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        // 传入SpringBoot的主程序类
        return builder.sources(Application.class);
    }

}
