package com.example.sampleproject.librarymanagementsystem.members;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Member {

	@Id
	private long Member_ID;
	private String Member_Name;
	private long Phone;
	private String address;
	
	
	public Member() {
		
	}
	public Member(long member_ID, String member_Name, long phone, String address) {
		super();
		Member_ID = member_ID;
		Member_Name = member_Name;
		Phone = phone;
		this.address = address;
	}
	public long getMember_ID() {
		return Member_ID;
	}
	public void setMember_ID(long member_ID) {
		Member_ID = member_ID;
	}
	public String getMember_Name() {
		return Member_Name;
	}
	public void setMember_Name(String member_Name) {
		Member_Name = member_Name;
	}
	public long getPhone() {
		return Phone;
	}
	public void setPhone(long phone) {
		Phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "Member [Member_ID=" + Member_ID + ", Member_Name=" + Member_Name + ", Phone=" + Phone + ", address="
				+ address + "]";
	}
}
