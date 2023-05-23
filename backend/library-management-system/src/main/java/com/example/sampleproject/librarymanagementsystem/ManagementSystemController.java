package com.example.sampleproject.librarymanagementsystem;

import java.util.Arrays;
import java.util.List;
import com.example.sampleproject.librarymanagementsystem.books.*;
import com.example.sampleproject.librarymanagementsystem.members.Member;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ManagementSystemController {
	
	@GetMapping(path="/library")
	public List<Book> retrieveAllBooks() {
		return Arrays.asList(new Book("ALKAJSDF234","The rise of the fall", "jammy"),
				new Book("sdfsDF234","The forgotten time", "sammie"));
	}
	
	@GetMapping(path="/members")
	public List<Member> retrieveAllMembers() {
		return Arrays.asList(new Member(23425234L,"jon",2342532L,"bangalore"),
				new Member(9674634L,"sammie",87692532L,"delhi"));
	}
}
