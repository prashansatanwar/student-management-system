package com.studentregistration.dao;

import java.util.List;
import java.util.Optional;

import com.studentregistration.dto.Student;

public interface IDao {
	void save(Student s);
	void delete(Student s);
	
	List<Student> findAll();
	List<Student> findByName(String name);
	Optional<Student> findById(int id);
	String findStudentNameById(int id);
	List<Student> findByPartialName(String pName);
	
	long count();
	
	void updateName(int id, String newName);
	void updateAge(int id, int newAge);
	void updatePhno(int id, int newPhno);
	void updateAddr(int id, String newAddr);
}
