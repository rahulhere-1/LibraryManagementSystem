package com.example.sampleproject.librarymanagementsystem.borrowedby;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sampleproject.librarymanagementsystem.borrowedby.Borrowed;

import jakarta.transaction.Transactional;

public interface BorrowedJpaRepository  extends JpaRepository<Borrowed, Long>{
		List<Borrowed> findByBookIsbn(String isbn);
		
		@Transactional
		void deleteByBookIsbn(String isbn);
		
		@Transactional
		void deleteByMemberId(Long id);
		
		List<Borrowed> findByMemberId(Long id);
}
