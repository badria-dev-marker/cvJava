package com.bouche.aridjNet;

import java.util.concurrent.TimeUnit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

@SpringBootApplication
public class AridjNetApplication {

	public static void main(String[] args) {
		SpringApplication.run(AridjNetApplication.class, args);
	}
	
	
	public void addResourceHandlers1(ResourceHandlerRegistry registry) {

	    // Register resource handler for images
	    registry.addResourceHandler("/img/**").addResourceLocations("/static/srcmath/img/")
	            .setCacheControl(CacheControl.maxAge(2, TimeUnit.HOURS).cachePublic());
	    
	}
	
	
	

}
