package com.studentregistration.service;

import java.util.List;

import com.studentregistration.dto.Student;

public interface IService {
	void registerStudent(Student s);
	
	Student removeStudent(int id);
	
	Student editStudent(int id,Student s);
	
	List<Student> getAllStudents();
	List<Student> getStudentByName(String name);
	List<Student> getStudentByPartialName(String pName);
	Student getStudentById(int id);
//	String getStudentNameById(int id);
	long getStudentCount();
}
