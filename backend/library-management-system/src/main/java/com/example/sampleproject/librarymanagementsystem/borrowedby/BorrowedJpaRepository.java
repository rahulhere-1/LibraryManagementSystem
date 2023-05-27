package com.example.sampleproject.librarymanagementsystem.borrowedby;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sampleproject.librarymanagementsystem.borrowedby.Borrowed;

public interface BorrowedJpaRepository  extends JpaRepository<Borrowed, Long>{
		List<Borrowed> findByBookIsbn(String isbn);
		
		List<Borrowed> findByMemberId(Long id);
}
