package com.tongfu.contract.entity;

public class Upload {
	
	private Integer pid;
	
	private String url;
	
	public Upload() {
		// TODO Auto-generated constructor stub
	}

	public Upload(Integer pid, String url) {
		super();
		this.pid = pid;
		this.url = url;
	}

	public Integer getPid() {
		return pid;
	}

	public void setPid(Integer pid) {
		this.pid = pid;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "Upload [pid=" + pid + ", url=" + url + "]";
	}
}
