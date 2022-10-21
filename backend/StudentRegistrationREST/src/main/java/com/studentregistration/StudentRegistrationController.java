package com.studentregistration;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.net.MediaType;
import com.studentregistration.dto.Student;
import com.studentregistration.service.StudentRegistrationService;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class StudentRegistrationController {
	
	@Autowired
	private StudentRegistrationService service;
	
	@GetMapping(path="/students")
	public List<Student> getAllStudents(){
		return service.getAllStudents();
	}
	
	@GetMapping(path="/students/name/{name}")
	public List<Student> getStudentsByName(@PathVariable String name){
		List<Student> s = service.getStudentByName(name);
		
		if(s == null) {
			throw new StudentNotFoundException("Student "+name+" does not exist!");
		}
		return s;
	}
	
	@GetMapping(path="/students/pname/{pName}")
	public List<Student> getStudentByPartialName(@PathVariable String pName){
		List<Student> s = service.getStudentByPartialName(pName);
		
		if(s == null) {
			throw new StudentNotFoundException("Student "+pName+"* does not exist!");
		}
		return s;
	}
	
	@GetMapping(path="/students/{id}")
	public Student getStudentById(@PathVariable int id) {
		Student s = service.getStudentById(id);
		if(s == null) {
			throw new StudentNotFoundException("Student with "+id+" does not exist!");
		}
		return s;
	}
	
	@GetMapping(path="/students/total")
	public long getStudentCount() {
		return service.getStudentCount();
	}
	
	@PostMapping(path="/students") 
	public void addStudent(@Valid @RequestBody Student s) {
		service.registerStudent(s);
	}
	
	@PatchMapping(path="/students/{id}")
	public Student updateStudent(@PathVariable int id, @Valid @RequestBody Student s) {
		System.out.println(s);
		
		return service.editStudent(id,s);
	}
	
	@DeleteMapping(path="/students/{id}")
	public Student deleteStudent(@PathVariable int id) {
		return service.removeStudent(id);
	}
}
