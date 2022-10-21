package com.studentregistration.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.studentregistration.dto.Student;

@Repository(value = "datajpa")
@Profile("prod")
public interface StudentRegistrationJPARepository extends IDao, JpaRepository<Student, Integer> {


	List<Student> findByName(String name);
	Optional<Student> findById(int id);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "update students s set s.name = :newName where s.id = :id", nativeQuery = true)
	public void updateName(@Param("id") int id, @Param("newName") String newName);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "update students s set s.age = :newAge where s.id = :id",nativeQuery = true)
	public void updateAge(@Param("id") int id, @Param("newAge") int newAge);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "update students s set s.phone_number = :newPhno where s.id = :id",nativeQuery = true)
	public void updatePhno(@Param("id") int id, @Param("newPhno") int newPhno);

	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "update students s set s.address = :newAddr where s.id = :id",nativeQuery = true)
	public void updateAddr(@Param("id") int id, @Param("newAddr") String newAddr);
	
	@Transactional
	@Query(value = "select * from students s where s.name like :pName%",nativeQuery = true)
	public List<Student> findByPartialName(@Param("pName") String pName);
	
}
