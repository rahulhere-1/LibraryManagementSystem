package com.example.sampleproject.librarymanagementsystem;

import java.util.List;
import java.util.Optional;

import com.example.sampleproject.librarymanagementsystem.books.*;
import com.example.sampleproject.librarymanagementsystem.borrowedby.Borrowed;
import com.example.sampleproject.librarymanagementsystem.members.Member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ManagementSystemController {
	
	@Autowired
	private SystemService service;
	
	@GetMapping(path="/library")
	public List<Book> retrieveAllBooks() {
		return service.retrieveAllBooks();
	}
	
	@PostMapping(path="/library")
	public void addBooks(@RequestBody Book book) {
		service.addBooks(book);
	}
	
	@PutMapping(path="/library")
	public void updateThisBooks(@RequestBody Book book) {
		service.updateThisBooks(book);
	}
	

	
	@GetMapping(path="/library/{bookID}")
	public ResponseEntity<Book> findThisBook(@PathVariable String bookID ) {
		Optional<Book> res = service.findThisBook(bookID);
		if(res.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		else return ResponseEntity.of(res); 
	}
	
	
	@DeleteMapping(path="/library/{bookID}")
	public void deleteThisBook(@PathVariable String bookID ) {
		service.deleteThisBook(bookID);
	}
	
	
	
	@GetMapping(path="/library/author/{author}")
	public List<Book> findBookByAuthor(@PathVariable String author ) {
		return service.findBookByAuthor(author);
	}
	
	
	@GetMapping(path="/members")
	public List<Member> retrieveAllMembers() {
		return service.retrieveAllMembers();
	}
	
	@PostMapping(path="/members")
	public void addMembers(@RequestBody Member member) {
		service.addMembers(member);
	}
	
	@PutMapping(path="/members")
	public void updateThisMembers(@RequestBody Member member) {
		service.updateThisMembers(member);
	}
	
	@GetMapping(path="/members/{memberID}")
	public ResponseEntity<Member> retrieveAllMembers(@PathVariable Long memberID) {
		Optional<Member> res = service.getThisMembers(memberID);
		if(res.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		else return ResponseEntity.of(res); 
	}
	
	@DeleteMapping(path="/members/{memberID}")
	public void removeThisMember(@PathVariable Long memberID) {
		 service.removeThisMember(memberID);
	}
	
	@GetMapping(path="/borrowed")
	public List<Borrowed> retrieveAllBorrowers() {
		return service.retrieveAllBorrowers();
	}
	
	@PostMapping(path="/borrowed")
	public void addBorrowers(@RequestBody Borrowed borrower) {
		 service.addBorrowers(borrower);
	}
	

	@PutMapping(path="/borrowed")
	public void updateBorrowers(@RequestBody Borrowed borrower) {
		 service.updateBorrowers(borrower);
	}
	
	
	@GetMapping(path="/borrowed/isbn/{isbn}")
	public List<Borrowed> getByIsbn(@PathVariable String isbn) {
		return service.getByIsbn(isbn);
	}
	
	@GetMapping(path="/borrowed/member/{id}")
	public List<Borrowed> getByMemberId(@PathVariable Long id) {
		return service.getByMemberId(id);
	}
	
	@DeleteMapping(path="/borrowed/member/{id}")
	public void removeIssuedBookByMember(@PathVariable Long id) {
		 service.removeIssuedBookByMember(id);
	}
	
	@DeleteMapping(path="/borrowed/{id}")
	public void removeIssuedBookById(@PathVariable Long id) {
		service.removeIssuedBookById(id);
	}
	
	@DeleteMapping(path="/borrowed/isbn/{isbn}")
	public void removeIssuedBookById(@PathVariable String isbn) {
		 service.removeIssuedBookById(isbn);
	}
	
}
