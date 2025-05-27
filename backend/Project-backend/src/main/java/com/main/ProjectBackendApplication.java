package com.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@EnableAspectJAutoProxy(proxyTargetClass = true)
@SpringBootApplication(scanBasePackages= {"com.main"})
public class ProjectBackendApplication 
{
    public static void main(String[] args) {
        SpringApplication.run(ProjectBackendApplication.class, args);
    }
}
