Library Management System
----------------------------------------------------

This is a simple application built for learning purpose. It manages books in library. 

It supports actions like adding books , issuing books, registering members.
This management application has three main tables - Books , Borrowed , Members

Frontend : React   
Backend : Spring Boot, Spring Data JPA     
Databse : MySQL      


Schema :

![schema](https://github.com/rahulhere-1/LibraryManagementSystem/assets/130029398/f10e3232-0cbf-4c90-95e5-78f8fb92f869)


- Books to Borrowed table has one to many relation.
- Member to Borrowed table has one to many relation.
- Book ID or ISBN is primary key for Book table and Member ID is primary key for Member table;
- Borrowed table has autoincrement id as primary key.
