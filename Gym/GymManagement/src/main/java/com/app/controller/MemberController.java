package com.app.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.LoginDto;
import com.app.dto.MemberDto;
import com.app.entity.Member;
import com.app.service.MemberService;

@RestController
@CrossOrigin
@RequestMapping("/member")
public class MemberController {
	
	@Autowired
	private MemberService memberService;
	
	//Add New Member
	@PostMapping("/add")
	public String addNewMember(@RequestParam("id")int id,
								@RequestParam("name")String name,
								@RequestParam("age")int age,
								@RequestParam("contact")String contact,
								@RequestParam("email")String email,
								@RequestParam("profilePic")MultipartFile profilePic,
								@RequestParam("adharNumber")String adharNumber,
								@RequestParam("password")String password)throws IOException {
		 byte[] profilePicBytes = profilePic.getBytes();
		 MemberDto dto=new MemberDto();
		 dto.setId(id);
		 dto.setName(name);
		 dto.setAge(age);
		 dto.setContact(contact);
		 dto.setEmail(email);
		 dto.setProfilePic(profilePicBytes);
		 dto.setAdharNumber(adharNumber);
		 dto.setPassword(password);
		 
		 return memberService.newMember(dto);
		
	}
	
	//See All Members
	@GetMapping("/getall")
	public List<Member>getall(){
		return memberService.fetchall();
	}
	
	//See Member by Id
	@GetMapping("/{id}")
	public Member getById(@PathVariable int id) {
		return memberService.fetchById(id);
	}
	
	
	//Edit Member Details
	@PutMapping("/edit/{id}")
	public ResponseEntity<String>updateMember(@PathVariable int id,@RequestParam("name")String name,
			@RequestParam("age")int age,
			@RequestParam("contact")String contact,
			@RequestParam("email")String email,
			@RequestParam("profilePic")MultipartFile profilePic,
			@RequestParam("adharNumber")String adharNumber)throws IOException{
		byte[] profilePicBytes = profilePic.getBytes();
		Member member=new Member();
		member.setName(name);
		 member.setAge(age);
		 member.setContact(contact);
		 member.setEmail(email);
		 member.setProfilePic(profilePicBytes);
		 member.setAdharNumber(adharNumber);
		boolean updated=memberService.updateMember(id,member);
		if(updated) {
			return new ResponseEntity<>("Member Updated Successfully",HttpStatus.OK);
		}else {
			return new ResponseEntity<>("Member not Found",HttpStatus.NOT_FOUND);
		}
	}
	
	//Delete Member by Id
	@DeleteMapping("/delete/{id}")
	public String deleteMember(@PathVariable int id) {
		String ans=memberService.memberDelete(id);
		return ans;
	}
	
	//Login Member
	@PostMapping("/login")
	public String loginMember(@RequestBody LoginDto loginDto) {
		boolean login=memberService.memberLogin(loginDto);
		if(login) {
			return "Login Successs";
		}else {
			return "Login Failed";
		}
	}
}
