package com.studentregistration;

import java.lang.reflect.InvocationTargetException;
import java.util.Date;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.studentregistration.ExceptionResponse;

@RestControllerAdvice
public class CustomResponseExceptionHandler extends ResponseEntityExceptionHandler{
	
	@ExceptionHandler(Exception.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	public final ExceptionResponse handleAllExceptions(Exception ex, WebRequest reg) {
//		ex.getCause().printStackTrace();
		ExceptionResponse expResp = new ExceptionResponse(new Date(),ex.getMessage(),"Detail Description of the Exception");
		return expResp;
	}
	
	@ExceptionHandler(StudentNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public final ExceptionResponse handleUserNotFoundException(StudentNotFoundException ex, WebRequest reg) {
		ExceptionResponse expResp = new ExceptionResponse(new Date(),ex.getMessage(),"The requested student id is not present in the system");
		return expResp;
	}
	
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
		ExceptionResponse expResponse = new ExceptionResponse(new Date(), "Validation Failed", ex.getBindingResult().toString());
		return new ResponseEntity(expResponse,HttpStatus.BAD_REQUEST);
		
	}
}
