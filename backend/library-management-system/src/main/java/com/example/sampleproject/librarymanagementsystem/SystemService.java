package com.example.sampleproject.librarymanagementsystem;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.sampleproject.librarymanagementsystem.books.Book;
import com.example.sampleproject.librarymanagementsystem.books.BooksJpaRepository;
import com.example.sampleproject.librarymanagementsystem.borrowedby.Borrowed;
import com.example.sampleproject.librarymanagementsystem.borrowedby.BorrowedJpaRepository;
import com.example.sampleproject.librarymanagementsystem.members.Member;
import com.example.sampleproject.librarymanagementsystem.members.MembersJpaRepository;

@Service
public class SystemService {
	

	@Autowired
	private BooksJpaRepository bookRepository;
	
	@Autowired
	private MembersJpaRepository memberRepository;
	
	@Autowired
	private BorrowedJpaRepository borrowedRepository;
	

	public List<Book> retrieveAllBooks() {
		return bookRepository.findAll();
	}
	
	
	public void addBooks( Book book) {
		bookRepository.save(book);
	}
	
	
	public void updateThisBooks( Book book) {
		bookRepository.save(book);
	}
	

	

	public Optional<Book> findThisBook( String bookID ) {
		return bookRepository.findById(bookID);
	}
	

	public void deleteThisBook( String bookID ) {
		bookRepository.deleteById(bookID);
	}
	
	
	

	public List<Book> findBookByAuthor( String author ) {
		return bookRepository.findByAuthor(author);
	}
	
	
	public List<Member> retrieveAllMembers() {
		return memberRepository.findAll();
	}
	
	
	public void addMembers( Member member) {
		memberRepository.save(member);
	}
	

	public void updateThisMembers( Member member) {
		memberRepository.save(member);
	}
	

	public Optional<Member> getThisMembers( Long memberID) {
		return memberRepository.findById(memberID);
	}
	

	public void removeThisMember( Long memberID) {
		 memberRepository.deleteById(memberID);
	}
	

	public List<Borrowed> retrieveAllBorrowers() {
		return borrowedRepository.findAll();
	}

	public void addBorrowers( Borrowed borrower) {
		 borrowedRepository.save(borrower);
	}
	

	public void updateBorrowers( Borrowed borrower) {
		 borrowedRepository.save(borrower);
	}
	
	
	public List<Borrowed> getByIsbn( String isbn) {
		return borrowedRepository.findByBookIsbn(isbn);
	}


	public List<Borrowed> getByMemberId( Long id) {
		return borrowedRepository.findByMemberId(id);
	}


	public void removeIssuedBookByMember( Long id) {
		 borrowedRepository.deleteByMemberId(id);
	}


	public void removeIssuedBookById( Long id) {
		borrowedRepository.deleteById(id);
	}


	public void removeIssuedBookById( String isbn) {
		 borrowedRepository.deleteByBookIsbn(isbn);
	}

}
