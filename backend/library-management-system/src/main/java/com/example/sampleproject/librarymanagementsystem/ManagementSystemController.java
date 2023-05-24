package com.example.sampleproject.librarymanagementsystem;

import java.util.List;
import java.util.Optional;

import com.example.sampleproject.librarymanagementsystem.books.*;
import com.example.sampleproject.librarymanagementsystem.borrowedby.Borrowed;
import com.example.sampleproject.librarymanagementsystem.borrowedby.BorrowedJpaRepository;
import com.example.sampleproject.librarymanagementsystem.members.Member;
import com.example.sampleproject.librarymanagementsystem.members.MembersJpaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ManagementSystemController {
	
	@Autowired
	private BooksJpaRepository bookRepository;
	
	@Autowired
	private MembersJpaRepository memberRepository;
	
	@Autowired
	private BorrowedJpaRepository borrowedRepository;
	
	@GetMapping(path="/library")
	public List<Book> retrieveAllBooks() {
		return bookRepository.findAll();
	}
	

	@GetMapping(path="/library/{bookID}")
	public Optional<Book> findThisBook(@PathVariable String bookID ) {
		return bookRepository.findById(bookID);
	}
	
	
	@GetMapping(path="/members")
	public List<Member> retrieveAllMembers() {
		return memberRepository.findAll();
	}
	
	@GetMapping(path="/members/{memberID}")
	public Optional<Member> retrieveAllMembers(@PathVariable Long memberID) {
		return memberRepository.findById(memberID);
	}
	
	@GetMapping(path="/borrowed")
	public List<Borrowed> retrieveAllBorrowers() {
		return borrowedRepository.findAll();
	}
	
}
