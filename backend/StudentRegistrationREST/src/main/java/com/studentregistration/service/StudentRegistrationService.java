package com.studentregistration.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.studentregistration.dao.IDao;
import com.studentregistration.dto.Student;

@Service
public class StudentRegistrationService implements IService{
	
	@Autowired
	@Qualifier(value="datajpa")
	private IDao dao;

	@Override
	public void registerStudent(Student s) {
		dao.save(s);
	}
	
	@Override
	public Student editStudent(int id, Student student) {
		System.out.println("updated: "+student);
		if(student.getName() != null) {
			dao.updateName(id, student.getName());
		}
		if(student.getAge() > 0) {
			System.out.println("editing age");
			dao.updateAge(id, student.getAge());
		}
		if(student.getPhno() > 0) {
			System.out.println("editing phno");
			dao.updatePhno(id, student.getPhno());
		}
		if(student.getAddr() != null) {
			System.out.println("editing addr");
			dao.updateAddr(id, student.getAddr());
		}
		
		return getStudentById(id);
	}
	
	@Override
	public List<Student> getAllStudents() {
		return dao.findAll();
	}

	@Override
	public List<Student> getStudentByName(String name) {
		return dao.findByName(name);
	}
	
	@Override
	public List<Student> getStudentByPartialName(String pName) {
		return dao.findByPartialName(pName);
	}

	@Override
	public Student getStudentById(int id) {
		Optional<Student> s = dao.findById(id);
		if(s.isPresent()) {
			return s.get();
		}
		return null;
	}
	
	@Override
	public Student removeStudent(int id) {
		Student s = getStudentById(id);
		dao.delete(s);
		return s;
	}

	@Override
	public long getStudentCount() {
		return dao.count();
	}

}
