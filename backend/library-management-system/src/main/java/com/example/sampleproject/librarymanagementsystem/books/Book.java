package com.example.sampleproject.librarymanagementsystem.books;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Book {
	@Id
	private String Book_ID;
	private String Book_Title;
	private String Author;
	
	public Book(String book_ID, String book_Title, String author) {
		super();
		Book_ID = book_ID;
		Book_Title = book_Title;
		Author = author;
	}
	
	
	public String getBook_ID() {
		return Book_ID;
	}
	public void setBook_ID(String book_ID) {
		Book_ID = book_ID;
	}
	public String getBook_Title() {
		return Book_Title;
	}
	public void setBook_Title(String book_Title) {
		Book_Title = book_Title;
	}
	public String getAuthor() {
		return Author;
	}
	public void setAuthor(String author) {
		Author = author;
	}
	@Override
	public String toString() {
		return "Book [Book_ID=" + Book_ID + ", Book_Title=" + Book_Title + ", Author=" + Author + "]";
	}
	
	
	
}
