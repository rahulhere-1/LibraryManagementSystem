package com.example.sampleproject.librarymanagementsystem;

import java.util.List;
import java.util.Optional;

import com.example.sampleproject.librarymanagementsystem.books.*;
import com.example.sampleproject.librarymanagementsystem.borrowedby.Borrowed;
import com.example.sampleproject.librarymanagementsystem.borrowedby.BorrowedJpaRepository;
import com.example.sampleproject.librarymanagementsystem.members.Member;
import com.example.sampleproject.librarymanagementsystem.members.MembersJpaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ManagementSystemController {
	
	@Autowired
	private BooksJpaRepository bookRepository;
	
	@Autowired
	private MembersJpaRepository memberRepository;
	
	@Autowired
	private BorrowedJpaRepository borrowedRepository;
	
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
	public Optional<Book> findThisBook(@PathVariable String bookID ) {
		return service.findThisBook(bookID);
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
	public Optional<Member> retrieveAllMembers(@PathVariable Long memberID) {
		return service.retrieveAllMembers(memberID);
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
