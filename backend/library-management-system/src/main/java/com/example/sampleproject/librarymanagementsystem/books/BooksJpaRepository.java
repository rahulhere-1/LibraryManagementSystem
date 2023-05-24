package com.example.sampleproject.librarymanagementsystem.books;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BooksJpaRepository extends JpaRepository<Book, String> {

}
