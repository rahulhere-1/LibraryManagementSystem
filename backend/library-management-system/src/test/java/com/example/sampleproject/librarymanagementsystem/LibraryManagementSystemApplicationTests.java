package com.example.sampleproject.librarymanagementsystem;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.example.sampleproject.librarymanagementsystem.books.Book;
import com.example.sampleproject.librarymanagementsystem.books.BooksJpaRepository;
import com.example.sampleproject.librarymanagementsystem.members.Member;
import com.example.sampleproject.librarymanagementsystem.members.MembersJpaRepository;

@SpringBootTest
class LibraryManagementSystemApplicationTests {
	
	@Autowired
	private SystemService service;
	
	@MockBean
	private BooksJpaRepository bookRepo;
	
	
	@MockBean
	private MembersJpaRepository mRepo;
	
	static List<Book> books = new ArrayList<>();
	static List<Member> members = new ArrayList<>();
	
	@BeforeAll
	static void setup() {
		books.add(new Book("BALS9892","Its gone","dusra"));
		books.add(new Book("ndf9892","Its there","sodhi"));
		books.add(new Book("sdfb9892","give me ","party"));
		
		members.add(new Member(1,"ramesh",987234,"delhi"));
		members.add(new Member(2,"rajesh",987186,"bangalore"));
		members.add(new Member(3,"santhosh",1324654,"chennai"));
		members.add(new Member(4,"himesh",987234,"mumbai"));
	}
	
	@AfterAll
	static void teardown() {
		books.clear();
		members.clear();
	}
	
	
	@Test
	void getAllBooksTest() {
		when(bookRepo.findAll()).thenReturn(books);
		int result = service.retrieveAllBooks().size();
		assertEquals(3, result);
				
	}
	
	@Test
	void findThisBookByIdTest() {
		String id = "ndf9892";
		Optional<Book> b = Optional.ofNullable(new Book("ndf9892","Its there","sodhi"));
		when(bookRepo.findById(id)).thenReturn(b);
		Optional<Book> result = service.findThisBook(id);
		assertEquals(b, result);
				
	}
	
	

}
