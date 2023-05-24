package com.example.sampleproject.librarymanagementsystem.members;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MembersJpaRepository extends JpaRepository<Member, Long> {
}
