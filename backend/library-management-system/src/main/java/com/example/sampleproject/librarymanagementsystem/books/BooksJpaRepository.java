package com.example.sampleproject.librarymanagementsystem.books;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.sampleproject.librarymanagementsystem.books.Book;


public interface BooksJpaRepository extends JpaRepository<Book, String> {
	
  List<Book> findByAuthor(String author);

}
