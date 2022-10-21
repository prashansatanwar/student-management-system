package com.studentregistration;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;


@SpringBootApplication
public class StudentRegistrationRestApplication {

	public static void main(String[] args) {
//		SpringApplication.run(StudentRegistrationRestApplication.class, args);
		ApplicationContext context =  SpringApplication.run(StudentRegistrationRestApplication.class, args);
		
		EntityManagerFactory factory = context.getBean("entityManagerFactory",EntityManagerFactory.class);
		
		System.out.println("factory " + factory);
		EntityManager em = factory.createEntityManager();
		EntityTransaction tx = em.getTransaction(); 
		
		tx.begin();
		
		System.out.println(em);
		
		tx.commit();
		em.close();
	}

}
