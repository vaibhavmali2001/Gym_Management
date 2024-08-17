package com.app.GymManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@ComponentScan(basePackages= {"com.*"})
@EntityScan("com.app.entity")
@EnableJpaRepositories("com.app.repo")
public class GymManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(GymManagementApplication.class, args);
	}

}
