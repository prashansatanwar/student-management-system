package com.studentregistration.dto;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
@Table(name="students")
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id",unique=true,nullable=false)
	private Integer id;
	
	@Column(name="name")
	@Size(min = 3, message="Name cannot be less than 3 characters!")
	@NotBlank(message = "Name is a mandatory field!")
	private String name;
	
	@Column(name="age")
	@NotBlank(message="Age is a mandatory field!")
	private int age;
	
	@Column(name="phone_number")
	@Size(min = 8,max = 8,message = "Please Enter a valid phone number")
	@NotBlank(message="Phone number is a mandatory field!")
	private int phno;
	
	@Column(name = "address")
	private String addr;
	
	public Student() {}
	public Student(String name, int age, int phno) {
		this.name = name;
		this.age = age;
		this.phno = phno;
	}
	
	public Integer getId(){
		return id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getPhno() {
		return phno;
	}
	public void setPhno(int phno) {
		this.phno = phno;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	@Override
	public String toString() {
		return "Student [name=" + name + ", age=" + age + ", phno=" + phno + ", addr=" + addr + "]";
	}
	
	
}
