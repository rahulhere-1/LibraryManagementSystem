package com.example.sampleproject.librarymanagementsystem.books;

import com.example.sampleproject.librarymanagementsystem.borrowedby.Borrowed;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Book {
	@Id
	private String bookID;
	private String book_title;
	private String Author;
	
	@OneToOne(mappedBy="book")
	private Borrowed borrowed;
	
	public Book() {
		
	}
	public Book(String book_ID, String book_Title, String author) {
		super();
		bookID = book_ID;
		book_title = book_Title;
		Author = author;
	}
	
	
	public String getBook_ID() {
		return bookID;
	}
	public void setBook_ID(String book_ID) {
		bookID = book_ID;
	}
	public String getBook_Title() {
		return book_title;
	}
	public void setBook_Title(String book_Title) {
		book_title = book_Title;
	}
	public String getAuthor() {
		return Author;
	}
	public void setAuthor(String author) {
		Author = author;
	}
	@Override
	public String toString() {
		return "Book [Book_ID=" + bookID + ", Book_Title=" + book_title + ", Author=" + Author + "]";
	}
	
	
	
}
